import {Component, DoCheck} from '@angular/core';

@Component({
  selector: 'comments',
  template: '<hr><div id="disqus_thread"></div>'
})
export class CommentsComponent implements DoCheck {

  constructor() {}

  ngDoCheck(): void {
    let d = document, s = d.createElement('script');
    s.src = `//${process.env.data.disqusId}/embed.js`;
    s.setAttribute('data-timestamp', '' + +new Date());
    (d.head || d.body).appendChild(s);
  }
}
