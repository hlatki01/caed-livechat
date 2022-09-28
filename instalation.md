## Instalar o widget

1. Copie e cole este código na sessão de scripts do seu site.

```javascript
<script type="text/javascript">
        (function (w, d, s, u) {
            w.RocketChat = function (c) { w.RocketChat._.push(c) }; w.RocketChat._ = []; w.RocketChat.url = u;
            var h = d.getElementsByTagName(s)[0], j = d.createElement(s);
            j.async = true; j.src = 'https://livechat.agenciabossanova.com/rocketchat-livechat.min.js?_=201903270000';
            h.parentNode.insertBefore(j, h);
        })(window, document, 'script', 'https://livechat.agenciabossanova.com/');

        RocketChat(function () {
            this.setDepartment('entry-point');
        });
</script>
```