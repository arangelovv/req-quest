namespace reqquest_backend.Models;

public class Collection
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
   
    //Collection may or may not belonf to a Project
    public int? ProjectId { get; set; }
    
    // Navigation properties
    public Project Project { get; set; }
    public List<Request> Requests { get; set; } = new List<Request>();
}