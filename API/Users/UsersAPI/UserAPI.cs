namespace UsersAPI
{
    public class User
    {
        public int id { get; set; }

        public string name { get; set; } = string.Empty; 
        public string email { get; set; } = string.Empty;
        public string telephone { get; set; } = string.Empty;
        public string message_topics { get; set; } = string.Empty;
        public string message { get; set; } = string.Empty;
    }
}
