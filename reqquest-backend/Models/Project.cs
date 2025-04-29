namespace reqquest_backend.Models;

public class Project
{
   public int Id { get; set; }
   public string Name { get; set; } = string.Empty;
   public string Description { get; set; } = string.Empty;
   public DateTime CreatedAt { get; set; }
   public DateTime UpdatedAt { get; set; }
   
   // Navigation Property
   public List<Collection> Collections { get; set; } = new List<Collection>(); //One Project -> Many Collections
}