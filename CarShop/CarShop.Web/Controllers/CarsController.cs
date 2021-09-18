namespace CarShop.Web.Controllers
{
    using Microsoft.AspNetCore.Mvc;

    public class CarsController : Controller
    {
        public IActionResult All()
        {
            return View();
        }
    }
}
