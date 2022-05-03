function showPopupMenu(message: string): void {
  const popupMenu = document.getElementById('popupMenu') as HTMLTemplateElement;
  const popupMenuMessage = document.getElementById('popupMenu__message') as HTMLTemplateElement;

  popupMenuMessage.innerHTML = message;
  popupMenu.style.left = '50%';
}

function hiddePopupMenu() {
  const popupMenu = document.getElementById('popupMenu') as HTMLTemplateElement;

  popupMenu.style.left = '-2000px';
}

export { showPopupMenu, hiddePopupMenu };
