using Amazon.DynamoDBv2.DataModel;
using Microsoft.AspNetCore.Mvc;
using StudentApi.Models;
using StudentApi.Services; // ✅ Import your SecretsService

namespace StudentApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentsController : ControllerBase
    {
        private readonly SecretsService _secretsService;
        private readonly IDynamoDBContext _context;

        public StudentsController(SecretsService secretsService, IDynamoDBContext context)
        {
            _secretsService = secretsService;
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> SaveStudent([FromBody] Student student)
        {
            var secrets = await _secretsService.GetSecretsAsync("StudentApp/ProdSecrets");
            var tableName = secrets["DYNAMODB_TABLE_NAME"];

            var config = new DynamoDBOperationConfig { OverrideTableName = tableName };
            await _context.SaveAsync(student, config);

           return Ok(new { message = "Saved student successfully" });
        }
    }   
}
