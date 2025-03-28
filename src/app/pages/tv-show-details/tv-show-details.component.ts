import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvShowService } from '../../services/tv-show.service';
import { Show } from '../../interfaces/show.interface';

@Component({
  selector: 'app-tv-show-details',
  standalone: true,
  imports: [],
  templateUrl: './tv-show-details.component.html',
  styleUrl: './tv-show-details.component.css'
})
export class TvShowDetailsComponent {
  show: Show | null = null;

  constructor(
    private route: ActivatedRoute,
    private tvShowService: TvShowService
  ) {
    const showName = this.route.snapshot.paramMap.get("name");
    if (showName) {
      this.show = this.tvShowService.getShowByName(showName);
    }
  }
}
