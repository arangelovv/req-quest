namespace reqquest_backend.Models;

public class Request
{
   public int Id { get; set; }
   public string Name { get; set; } = string.Empty;
   public string Method { get; set; } = string.Empty;
   public int CollectionId { get; set; } // Request MUST belong to a Collection
   public DateTime CreatedAt { get; set; } = DateTime.Now;
   public DateTime UpdatedAt { get; set; }
   
   // Navigation Property
   public Collection? Collection { get; set; }
}