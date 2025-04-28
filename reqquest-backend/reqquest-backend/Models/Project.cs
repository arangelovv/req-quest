namespace reqquest_backend.Models;

public class Project
{
   public int Id { get; set; }
   public string Name { get; set; }
   public string Description { get; set; }
   public List<Collection> Collections { get; set; } = new List<Collection>();
   public DateTime CreatedAt { get; set; }
   public DateTime UpdatedAt { get; set; }
}