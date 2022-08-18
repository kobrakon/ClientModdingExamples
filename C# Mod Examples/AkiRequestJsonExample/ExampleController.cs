using Newtonsoft.Json;
using System.Collections.Generic;

// AKI Modules have an HTTP request system that allows you to send a request using a router and recieve JSON data
// depending on the router URL you call, view the TS to see how to setup your own router so you can communicate from your
// plugin to your server mod for things like configs, profile data, etc and check the dev site for what routers already exist

namespace AkiRequestJsonExample
{
    class JsonRequestHandler
    {
        public static string GetServerString()
        {
            var req = Aki.Common.Http.RequestHandler.GetJson("/ex-static-router/string"); // input the URL you set
            return req; // no need to deserialize or parse single strings
        }
        public static bool GetServerBool()
        {
            var req = Aki.Common.Http.RequestHandler.GetJson("/ex-static-router/bool");
            return bool.Parse(req.ToString()); // Gets string and parses it to a boolean equivalent
        }
        public static int GetServerInt()
        {
            var req = Aki.Common.Http.RequestHandler.GetJson("/ex-static-router/int");
            return int.Parse(req.ToString()); // Gets string and parses it to an int32 equivalent
        }

        // now we get into the good stuff, deserializing JSONs

        private static JSON DeserializeJson()
        {
            var req = Aki.Common.Http.RequestHandler.GetJson("/ex-static-router/json");
            return JsonConvert.DeserializeObject<JSON>(req);
            // this will deserialize the json and set all of the similarly named fields in our JSON class to their equivalent in the JSON file
        }

        // when invoked will pass parameters as a string that we can grab and put into the json
        private static void WriteJSON(string s, bool b, int i)
        {
            Aki.Common.Http.RequestHandler.GetData($"/ex-dynamic-router/post/{s}/{b}/{i}");
            return;
        }
    }

    // first create a new class with fields for each json object prior to deserializing
    class JSON
    {
        public string ExampleString { get; set; }
        public bool ExampleBool { get; set; }
        public int ExampleInt { get; set; }
        public IList<string> ExampleArray { get; set;}
    }
}