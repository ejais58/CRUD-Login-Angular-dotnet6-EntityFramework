namespace LoginAPI.models
{
    public class Login
    {
        public int Id { get; set; } 
        public string Email { get; set; } = string.Empty;
        public string Contraseña { get; set; } = string.Empty;
    }
}
