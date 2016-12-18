export class Modal {
  private headerContent: string;
  private mainContent: string = 'Czy jesteś pewien?';
  private confirmLabel: string = 'Ok';
  private declineLabel: string = 'Anuluj';
  private resolveCallback: () => void;
  private rejectCallback: () => void;

  static getDangerDialog(): Modal {
    return new Modal('danger');
  }

  static getConfirmDialog(): Modal {
    return new Modal('primary');
  }

  private constructor(private type: 'danger' | 'primary') {
  }

  header(header: string): Modal {
    this.headerContent = header;
    return this;
  }

  content(content: string): Modal {
    this.mainContent = content;
    return this;
  }

  confirm(label: string): Modal {
    this.confirmLabel = label;
    return this;
  }

  decline(label: string): Modal {
    this.declineLabel = label;
    return this;
  }

  onResolve(callback: () => void): Modal {
    this.resolveCallback = callback;
    return this;
  }

  onReject(callback: () => void): Modal {
    this.rejectCallback = callback;
    return this;
  }

  show() {
    const header = `
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">${this.headerContent}</h4>
      </div>
    `;

    const dialogTemplate = `
      <div class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            ${ this.headerContent ? header : '' }
            <div class="modal-body">
              <p>${this.mainContent}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default dialog-dismiss" data-dismiss="modal">${this.declineLabel}</button>
              <button type="button" class="btn btn-${this.type} dialog-confirm" data-dismiss="modal">${this.confirmLabel}</button>
            </div>
          </div>
        </div>
      </div>
    `;

    let $modal = jQuery(dialogTemplate);
    if (this.rejectCallback) {
      $modal.find('.dialog-dismiss').on('click', this.rejectCallback);
    }
    if (this.resolveCallback) {
      $modal.find('.dialog-confirm').on('click', this.resolveCallback);
    }
    $('body').append($modal);
    $modal.on('hidden.bs.modal', (event: Event) => {
      $modal.remove();
    });
    $modal.modal('show');
  }

}
