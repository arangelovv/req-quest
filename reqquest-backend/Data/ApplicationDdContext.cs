using System.Net.Mime;
using Microsoft.EntityFrameworkCore;
using reqquest_backend.Models;

namespace reqquest_backend.Data;

public class ApplicationDdContext : DbContext
{
   public  ApplicationDdContext(DbContextOptions<ApplicationDdContext> options) : base(options) { }
   
   public DbSet<Collection> Collection { get; set; }
   public DbSet<Project> Project { get; set; }
   public DbSet<Request> Request { get; set; }
}