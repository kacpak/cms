export class Alert {
  private alertContent: string;

  static getDangerAlert(): Alert {
    return new Alert('danger');
  }

  static getWarningAlert(): Alert {
    return new Alert('warning');
  }

  static getInfoAlert(): Alert {
    return new Alert('info');
  }

  static getSuccessAlert(): Alert {
    return new Alert('success');
  }

  private constructor(private type: 'danger' | 'warning' | 'success' | 'info') {
  }

  content(content: string): Alert {
    this.alertContent = content;
    return this;
  }

  show() {
    const template = `
    <div class="alert alert-${this.type} alert-dismissible fade in" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        ${this.alertContent}
    </div >`;

    let $alert = jQuery(template);

    let $alertContainer: JQuery = $('#alertContainer');
    if (!$alertContainer.length) {
      $('body').append(`<div id="alertContainer"></div>`);
      $alertContainer = $('#alertContainer');
    }

    $alertContainer.append($alert);
    $alert.alert();
    setTimeout(() => $alert.alert('close'), 1200);
  }

}
