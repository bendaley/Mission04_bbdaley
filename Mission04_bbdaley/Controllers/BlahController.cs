﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_bbdaley.Controllers
{
    public class BlahController : Controller
    {
        public IActionResult Index()
        {
            // throw new IndexOutOfRangeException();
            
            return View();
        }

        [HttpGet]
        public IActionResult Grade()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Grade(object model)
        {
            return View();
        }
    }
}
