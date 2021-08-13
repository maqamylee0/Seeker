import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-job',
  templateUrl: './job.page.html',
  styleUrls: ['./job.page.scss'],
})
export class JobPage implements OnInit {
item:any;
  constructor(    
    private route:ActivatedRoute,
    private router:Router

    ) { }

  ngOnInit() {
    // this.item=this.route.snapshot.params;
    // if (this.router.getCurrentNavigation().extras.state) {
    //   let job = this.router.getCurrentNavigation().extras.state.user;
    //   console.log(job);
      
    // }
  }

  

}
