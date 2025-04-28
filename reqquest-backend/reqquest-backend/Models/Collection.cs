namespace reqquest_backend.Models;

public class Collection
{
    public int Id { get; set; }
    public int? ProjectId { get; set; }
    public Project Project { get; set; }
    public string Name { get; set; } = string.Empty;
    public List<Request> Requests { get; set; } = new List<Request>();
    public string Description { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}