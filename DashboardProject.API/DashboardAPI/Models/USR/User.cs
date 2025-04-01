using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DashboardAPI.Models.USR
{
    [Table("Users", Schema = "USR")]
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("UserId")]
        public int Id { get; set; }

        [Required(ErrorMessage = "وارد کردن نام کاربری الزامی است")]
        [Column("Username", TypeName = "nvarchar(50)")]
        [StringLength(25, MinimumLength = 5, ErrorMessage = "نام کاربری باید بین 5 تا 25 کاراکتر باشد")]
        public string Username { get; set; } = string.Empty;

        [Required(ErrorMessage = "ایمیل الزامی است")]
        [EmailAddress(ErrorMessage = "ایمیل وارد شده معتبر نیست")]
        [Column("Email", TypeName = "nvarchar(100)")]
        [StringLength(100)]
        public string Email { get; set; } = string.Empty;

        [Required]
        [Column("PasswordHash", TypeName = "nvarchar(256)")]
        [StringLength(256, MinimumLength = 6, ErrorMessage = "رمز عبور باید حداقل 6 کاراکتر باشد")]
        public string PasswordHash { get; set; } = string.Empty;

        [Column("IsActive")]
        public bool IsActive { get; set; } = true;

        [Column("CreatedAt")]
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
