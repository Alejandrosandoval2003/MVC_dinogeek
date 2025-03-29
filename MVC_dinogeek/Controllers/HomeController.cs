using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using MVC_dinogeek.Models;

namespace MVC_dinogeek.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult News()
        {
            return View();
        }

        public IActionResult New()
        {
            return View();
        }

        public IActionResult Guides()
        {
            return View();
        }

        public IActionResult Guide()
        {
            return View();
        }

        public IActionResult about_Us()
        {
            return View();
        }

        public IActionResult Login()
        {
            return View();
        }

        public IActionResult Register()
        {
            return View();
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
