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
            return View();
        }
    }
}
