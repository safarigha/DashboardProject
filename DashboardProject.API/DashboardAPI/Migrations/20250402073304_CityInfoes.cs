using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DashboardAPI.Migrations
{
    /// <inheritdoc />
    public partial class CityInfoes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "WTH");

            migrationBuilder.CreateTable(
                name: "CityInfo",
                schema: "WTH",
                columns: table => new
                {
                    CityId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    City = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    CityAscii = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    Latitude = table.Column<double>(type: "float", nullable: false),
                    Longitude = table.Column<double>(type: "float", nullable: false),
                    Country = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    ISO2 = table.Column<string>(type: "nvarchar(5)", nullable: false),
                    ISO3 = table.Column<string>(type: "nvarchar(5)", nullable: false),
                    ProvinceName = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    Capital = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    CityFarsiName = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    CountryFarsiName = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    ProvinceFarsiName = table.Column<string>(type: "nvarchar(100)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CityInfo", x => x.CityId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CityInfo",
                schema: "WTH");
        }
    }
}
