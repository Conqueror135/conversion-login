window.onload = function () {
    const headTag = document.head;

    const scriptAjax = document.createElement('script');

    scriptAjax.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';

    headTag.appendChild(scriptAjax);


    const scripInitAndLogin = document.createElement('script');
    scripInitAndLogin.innerHTML = `    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
  
      window.fbAsyncInit = function () {
        FB.init({
          appId: '331012676138899',
          cookie: true,
          xfbml: true,
          version: 'v18.0'
        });
      };`;

    headTag.appendChild(scripInitAndLogin);


    document.getElementById('whatsapp-login-btn').addEventListener('click', () => {
        FB.login(function (response) {
            $.ajax({
                url: '/auth/whatsapp/callback',
                method: 'POST',
                data: response,
                success: function (data) {
                    console.log('Gửi dữ liệu thành công', data);
                },
                error: function (error) {
                    console.error('Lỗi khi gửi dữ liệu', error);
                }
            });

        }
            ,
            {
                config_id: '1043290483372104',
                response_type: 'code',
                override_default_response_type: true
            });
    })
};

