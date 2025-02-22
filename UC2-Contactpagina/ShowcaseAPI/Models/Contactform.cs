using System.ComponentModel.DataAnnotations;

namespace ShowcaseAPI.Models
{
    public class Contactform
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [StringLength(200)]
        public string Subject { get; set; }

        [Required]
        [StringLength(600)]
        public string Message { get; set; }
    }
}
