$(function() {
  $('#prototype_captured_images_attributes_0_content').on('change', function(e) {
      var file = e.target.files[0];
      // e.target.files[0]で選択されたファイル情報を取得
      var reader = new FileReader();
      // ファイルを読み込むFileReaderオブジェクトを生成

      if(file.type.indexOf("image") < 0){
        aleart('画像ファイルを指定してください');
        return false;
      }
      // 画像ファイル以外は処理を止める

      // 読み込み成功時に実行されるイベント
      reader.onload = function(e) {
        $('#img_area').empty();
        $('#img_area').attr({
          src: e.target.result,
          width: '100%',
          height: '100%'
          });
        // 画像を表示するinputをempty(）で一旦空にする。そして先ほど取得したファイルのURLはevent.target.resultから取得できるので、それをsrc属性に指定。
      }
      reader.readAsDataURL(file);
      // ファイル読み込みを実行
  });

  $('#prototype_captured_images_attributes_1_content').on('change', function(e) {
      var file = e.target.files[0];
      // e.target.files[0]で選択されたファイル情報を取得
      var reader = new FileReader();
      // ファイルを読み込むFileReaderオブジェクトを生成

      if(file.type.indexOf("image") < 0){
        aleart('画像ファイルを指定してください');
        return false;
      }
      // 画像ファイル以外は処理を止める

      // 読み込み成功時に実行されるイベント
      reader.onload = function(e) {
        $('#img_area1').empty();
        $('#img_area1').attr({
          src: e.target.result,
          width: '100%',
          height: '100%'
          });
        // 画像を表示するinputをempty(）で一旦空にする。そして先ほど取得したファイルのURLはevent.target.resultから取得できるので、それをsrc属性に指定。
      }
      reader.readAsDataURL(file);
      // ファイル読み込みを実行
  });

  $('#prototype_captured_images_attributes_2_content').on('change', function(e) {
      var file = e.target.files[0];
      // e.target.files[0]で選択されたファイル情報を取得
      var reader = new FileReader();
      // ファイルを読み込むFileReaderオブジェクトを生成

      if(file.type.indexOf("image") < 0){
        aleart('画像ファイルを指定してください');
        return false;
      }
      // 画像ファイル以外は処理を止める

      // 読み込み成功時に実行されるイベント
      reader.onload = function(e) {
        $('#img_area2').empty();
        $('#img_area2').attr({
          src: e.target.result,
          width: '100%',
          height: '100%'
          });
        // 画像を表示するinputをempty(）で一旦空にする。そして先ほど取得したファイルのURLはevent.target.resultから取得できるので、それをsrc属性に指定。
      }
      reader.readAsDataURL(file);
      // ファイル読み込みを実行
  });

  $('#prototype_captured_images_attributes_3_content').on('change', function(e) {
      var file = e.target.files[0];
      // e.target.files[0]で選択されたファイル情報を取得
      var reader = new FileReader();
      // ファイルを読み込むFileReaderオブジェクトを生成

      if(file.type.indexOf("image") < 0){
        aleart('画像ファイルを指定してください');
        return false;
      }
      // 画像ファイル以外は処理を止める

      // 読み込み成功時に実行されるイベント
      reader.onload = function(e) {
        $('#img_area3').empty();
        $('#img_area3').attr({
          src: e.target.result,
          width: '100%',
          height: '100%'
          });
        // 画像を表示するinputをempty(）で一旦空にする。そして先ほど取得したファイルのURLはevent.target.resultから取得できるので、それをsrc属性に指定。
      }
      reader.readAsDataURL(file);
      // ファイル読み込みを実行
  });
});
