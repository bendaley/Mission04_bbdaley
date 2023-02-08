using Microsoft.AspNetCore.Mvc;
using Mission04_bbdaley.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_bbdaley.Controllers
{
    public class BlahController : Controller
    {
        // index action
        public IActionResult Index()
        {
            // throw new IndexOutOfRangeException();
            
            return View();
        }

        // grade get action
        [HttpGet]
        public IActionResult Grade()
        {
            return View();
        }

        // grade post action
        [HttpPost]
        public IActionResult Grade(GradeModel model)
        {
            return View();
        }
    }
}
