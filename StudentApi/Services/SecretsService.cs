using Amazon.SecretsManager;
using Amazon.SecretsManager.Model;
using System.Text.Json;

namespace StudentApi.Services
{
    public class SecretsService
    {
        private readonly IAmazonSecretsManager _secretsManager;

        public SecretsService(IAmazonSecretsManager secretsManager)
        {
            _secretsManager = secretsManager;
        }

        public async Task<Dictionary<string, string>> GetSecretsAsync(string secretName)
        {
            var request = new GetSecretValueRequest
            {
                SecretId = secretName
            };

            var response = await _secretsManager.GetSecretValueAsync(request);
            return JsonSerializer.Deserialize<Dictionary<string, string>>(response.SecretString);
        }
    }
}
