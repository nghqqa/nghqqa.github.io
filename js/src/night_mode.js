var brightness;
//��ʾ����
function cover_nest(brightness) {
  if (typeof(div) == 'undefined') {
      div = document.createElement('div');
      div.setAttribute('style', 'position:fixed;top:0;left:0;outline:5000px solid;z-index:99999;');
      document.body.appendChild(div);
  } else {
      div.style.display = '';
  }
  div.style.outlineColor = 'rgba(0,0,0,' + brightness + ')';
}
//�¼�����  ͨ��ASCll���б𰴼��Ƿ���
window.addEventListener('keydown', function(e) {
  //Alt+Z:��ҹ��ģʽ
  if (e.altKey && e.keyCode == 90) {
      cover_nest(brightness = 0.3);
  }
  //Alt+X:�ر�
  if (e.altKey && e.keyCode == 88) {
      cover_nest(brightness = 0);
  }
  //Alt+��:��������
  if (e.altKey && e.keyCode == 38) {
      if (brightness - 0.05 > 0.05) cover_nest(brightness -= 0.05);
  }
  //Alt+��:��������
  if (e.altKey && e.keyCode == 40) {
      if (brightness + 0.05 < 0.95) cover_nest(brightness += 0.05);
  }
}, false);