namespace reqquest_backend.Models;

public class Request
{
   public int Id { get; set; }
   public int CollectionId { get; set; }
   public Collection? Collection { get; set; }
   public string Name { get; set; } = string.Empty;
   public string Method { get; set; } = string.Empty;
   public DateTime CreatedAt { get; set; }
   public DateTime UpdatedAt { get; set; }
}