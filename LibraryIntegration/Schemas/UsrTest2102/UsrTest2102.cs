//something 
using System.Threading.Tasks;
using System;
using System.Net.Http;

public class HttpRequestExecutor
{
    private readonly HttpClient _httpClient;

    public HttpRequestExecutor()
    {
        _httpClient = new HttpClient();
    }

    public async Task<string> ExecuteGetRequestAsync(string url)
    {
        try
        {
            HttpResponseMessage response = await _httpClient.GetAsync(url);
            response.EnsureSuccessStatusCode();
            string responseBody = await response.Content.ReadAsStringAsync();
            Console.WriteLine("\nException Caught!");
            return responseBody;
        }
        catch (HttpRequestException e)
        {
            Console.WriteLine("\nException Caught!");
            Console.WriteLine("Message :{0} ", e.Message);
            return null;
        }
    }
}