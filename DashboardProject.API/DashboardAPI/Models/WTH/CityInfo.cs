using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DashboardAPI.Models.WTH
{
    [Table("CityInfo", Schema = "WTH")]

    public class CityInfo
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("CityId")]
        public int Id { get; set; }

        [Required]
        [Column("City", TypeName = "nvarchar(100)")]
        public string City { get; set; } = string.Empty;

        [Required]
        [Column("CityAscii", TypeName = "nvarchar(100)")]
        public string CityAscii { get; set; } = string.Empty;

        [Required]
        [Column("Latitude")]
        public double Lat { get; set; }

        [Required]
        [Column("Longitude")]
        public double Lng { get; set; }

        [Required]
        [Column("Country", TypeName = "nvarchar(100)")]
        public string Country { get; set; } = string.Empty;

        [Column("ISO2", TypeName = "nvarchar(5)")]
        public string ISO2 { get; set; } = string.Empty;

        [Column("ISO3", TypeName = "nvarchar(5)")]
        public string ISO3 { get; set; } = string.Empty;

        [Column("ProvinceName", TypeName = "nvarchar(100)")]
        public string ProvinceName { get; set; } = string.Empty;

        [Column("Capital", TypeName = "nvarchar(50)")]
        public string? Capital { get; set; }

        [Column("CityFarsiName", TypeName = "nvarchar(100)")]
        public string? CityFarsiName { get; set; }

        [Column("CountryFarsiName", TypeName = "nvarchar(100)")]
        public string? CountryFarsiName { get; set; }

        [Column("ProvinceFarsiName", TypeName = "nvarchar(100)")]
        public string? ProvinceFarsiName { get; set; }
    }
}
