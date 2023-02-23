package com.marceloserpa.authtokenbased;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class HomeRestController {

    @GetMapping("/hello")
    public String ok() {
        return "ooi";
    }

}
