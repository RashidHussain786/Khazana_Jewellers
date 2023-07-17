namespace MyShop.Models
{
    public class jewellery
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Image { get; set; } = null!;
        public string Material { get; set; }= null!;
        public string Description { get; set; }=null!;
        public decimal Weight { get; set; }
    }
}
