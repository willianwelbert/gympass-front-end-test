!function(i){"use strict";function e(t,e){this.element=t,this.$element=i(t),this.settings=i.extend({},n,e),this._defaults=n,this._name=s,this.init()}var s="WordpressUlikeNotifications",n={messageType:"success",messageText:"Hello World!",messageElement:"wpulike-message",notifContainer:"wpulike-notification"};i.extend(e.prototype,{init:function(){this._message(),this._container(),this._append(),this._remove()},_message:function(){this.$messageElement=i("<div/>").addClass(this.settings.messageElement+" wpulike-"+this.settings.messageType).text(this.settings.messageText)},_container:function(){i("."+this.settings.notifContainer).length||this.$element.append(i("<div/>").addClass(this.settings.notifContainer)),this.$notifContainer=this.$element.find("."+this.settings.notifContainer)},_append:function(){this.$notifContainer.append(this.$messageElement).trigger("WordpressUlikeNotificationAppend")},_remove:function(){var t=this;this.$messageElement.click(function(){i(this).fadeOut(300,function(){i(this).remove(),i("."+t.settings.messageElement).length||t.$notifContainer.remove()}).trigger("WordpressUlikeRemoveNotification")}),setTimeout(function(){t.$messageElement.fadeOut(300,function(){i(this).remove(),i("."+t.settings.messageElement).length||t.$notifContainer.remove()}).trigger("WordpressUlikeRemoveNotification")},8e3)}}),i.fn[s]=function(t){return this.each(function(){new e(this,t)})}}(jQuery,window,document),function(n,t,i,a){"use strict";function e(t,e){for(var i in this.element=t,this.$element=n(t),this.settings=n.extend({},o,e),this._defaults=o,this._name=l,this.buttonElement=this.$element.find(this.settings.buttonSelector),this.likersElement=this.$element.find(this.settings.likersSelector),this.generalElement=this.$element.find(this.settings.generalSelector),this.counterElement=this.generalElement.find(this.settings.counterSelector),r){var s=this.buttonElement.data(i);s!==a&&(this.settings[r[i]]=s)}this.init()}var l="WordpressUlike",s=(n(t),n(i)),o={ID:0,nonce:0,type:"",likeStatus:0,counterSelector:".count-box",generalSelector:".wp_ulike_general_class",buttonSelector:".wp_ulike_btn",likersSelector:".wp_ulike_likers_wrapper"},r={"ulike-id":"ID","ulike-nonce":"nonce","ulike-type":"type","ulike-status":"likeStatus"};n(".wp_ulike_is_already_liked h2").text(function(){return n(this).text().replace("Upvote","You voted!")}),n.extend(e.prototype,{init:function(){this.buttonElement.click(this._ajaxify.bind(this))},_ajaxify:function(){n.ajax({type:"POST",cache:!1,dataType:"json",url:wp_ulike_params.ajax_url,data:{action:"wp_ulike_process",id:this.settings.ID,nonce:this.settings.nonce,status:this.settings.likeStatus,type:this.settings.type},beforeSend:function(){s.trigger("WordpressUlikeLoading"),this.generalElement.addClass("wp_ulike_is_loading")}.bind(this),success:function(t){this.generalElement.removeClass("wp_ulike_is_loading"),t.success?this._update(t):this._notif("error",t.data),s.trigger("WordpressUlikeUpdated")}.bind(this)})},_update:function(t){switch(this.settings.likeStatus){case 1:this.buttonElement.attr("data-ulike-status",4),this.settings.likeStatus=4,this.generalElement.addClass("wp_ulike_is_liked").removeClass("wp_ulike_is_not_liked"),this.generalElement.children().first().addClass("wp_ulike_click_is_disabled"),this.counterElement.text(t.data.data),this._actions("success",t.data.message,t.data.btnText,4),n(".wp_ulike_btn h2").text(function(){return n(this).text().replace("Upvote","You voted!")});break;case 2:this.buttonElement.attr("data-ulike-status",3),this.settings.likeStatus=3,this.generalElement.addClass("wp_ulike_is_unliked").removeClass("wp_ulike_is_liked"),this.counterElement.text(t.data.data),this._actions("error",t.data.message,t.data.btnText,3);break;case 3:this.buttonElement.attr("data-ulike-status",2),this.settings.likeStatus=2,this.generalElement.addClass("wp_ulike_is_liked").removeClass("wp_ulike_is_unliked"),this.counterElement.text(t.data.data),this._actions("success",t.data.message,t.data.btnText,2);break;case 4:this._actions("info",t.data.message,t.data.btnText,4),this.generalElement.children().first().addClass("wp_ulike_click_is_disabled");break;default:this._actions("warning",t.data.message,t.data.btnText,0)}!1!==t.data.likers&&this._likers(t.data.likers)},_actions:function(t,e,i,s){this.buttonElement.hasClass("wp_ulike_put_image")?3!==s&&2!==s||this.buttonElement.toggleClass("image-unlike"):this.buttonElement.hasClass("wp_ulike_put_text")&&this.buttonElement.find("span").html(i),this._notif(t,e)},_likers:function(t){""!==t?this.likersElement.html(t):this.likersElement.empty()},_notif:function(t,e){"1"===wp_ulike_params.notifications&&n(i.body).WordpressUlikeNotifications({messageType:t,messageText:e})}}),n.fn[l]=function(t){return this.each(function(){n.data(this,"plugin_"+l)||n.data(this,"plugin_"+l,new e(this,t))})}}(jQuery,window,document),function(t){t(function(){t(this).bind("DOMNodeInserted",function(){t(".wpulike").WordpressUlike()})}),t(".wpulike").WordpressUlike(),t("p").filter(function(){return""==this.innerHTML}).remove()}(jQuery);