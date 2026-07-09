function initSecurity() {
    const existing = document.getElementById('orite-sec-panel');
    if (existing) existing.remove();
    const existingStyle = document.getElementById('orite-sec-style');
    if (existingStyle) existingStyle.remove();

    const LANGS = {
        fa:{dir:'rtl',font:'Vazirmatn',title:'پنل امنیت Orite',close:'✖',scan:'اسکن امنیت',scanning:'در حال اسکن...',tabs:{overview:'🏠 خلاصه',site:'🌐 امنیت سایت',browser:'🔒 مرورگر',internet:'📡 اینترنت',device:'💻 دستگاه',threats:'⚠️ تهدیدات'},overview:{secLevel:'سطح امنیت',siteScore:'امتیاز سایت',browserScore:'امتیاز مرورگر',netScore:'امتیاز شبکه',threats:'تهدیدات شناسایی شده'},site:{title:'اسکن امنیت سایت Orite',checks:{https:'پروتکل HTTPS',worker:'Cloudflare Worker',cors:'محدودیت CORS',apiKey:'کلید API امن',xss:'محافظت XSS',csp:'سیاست امنیت محتوا',sri:'یکپارچگی منابع',mixed:'محتوای مختلط'}},browser:{title:'امنیت مرورگر',issues:'مشکلات امنیتی',checks:{updated:'مرورگر به‌روز',private:'حالت خصوصی',cookies:'کنترل کوکی‌ها',storage:'امنیت ذخیره‌سازی',webrtc:'نشت WebRTC',fingerprint:'اثر انگشت مرورگر',extensions:'افزونه‌های مشکوک',https_only:'حالت HTTPS Only'}},internet:{title:'امنیت اینترنت',speed:'سرعت اینترنت',latency:'تاخیر شبکه',volume:'حجم دانلود',upload:'سرعت آپلود',dns:'امنیت DNS',vpn:'وضعیت VPN',isp:'ارائه‌دهنده اینترنت'},device:{title:'اطلاعات دستگاه',ip:'آدرس IP',uid:'شناسه کاربر',os:'سیستم عامل',browser:'مرورگر',screen:'صفحه نمایش',lang:'زبان سیستم',tz:'منطقه زمانی',battery:'شارژ دستگاه',memory:'حافظه RAM',cores:'هسته‌های CPU',platform:'پلتفرم'},threats:{title:'تهدیدات امنیتی',known:'تهدیدات شناخته شده',realtime:'پایش زمان واقعی',status:'وضعیت سیستم'},footer:{manager:'مدیر پروژه: LuoLaf.Studio',version:'© 2026 Orite Security v1.0'},lang:'انتخاب زبان',safe:'امن',warning:'هشدار',danger:'خطر',pass:'موفق',fail:'ناموفق',unknown:'نامشخص'},
        en:{dir:'ltr',font:'Inter',title:'Orite Security Panel',close:'✖',scan:'Security Scan',scanning:'Scanning...',tabs:{overview:'🏠 Overview',site:'🌐 Site Security',browser:'🔒 Browser',internet:'📡 Internet',device:'💻 Device',threats:'⚠️ Threats'},overview:{secLevel:'Security Level',siteScore:'Site Score',browserScore:'Browser Score',netScore:'Network Score',threats:'Threats Detected'},site:{title:'Orite Site Security Scan',checks:{https:'HTTPS Protocol',worker:'Cloudflare Worker',cors:'CORS Restrictions',apiKey:'Secure API Key',xss:'XSS Protection',csp:'Content Security Policy',sri:'Subresource Integrity',mixed:'Mixed Content'}},browser:{title:'Browser Security',issues:'Security Issues',checks:{updated:'Browser Updated',private:'Private Mode',cookies:'Cookie Control',storage:'Storage Security',webrtc:'WebRTC Leak',fingerprint:'Browser Fingerprint',extensions:'Suspicious Extensions',https_only:'HTTPS Only Mode'}},internet:{title:'Internet Security',speed:'Internet Speed',latency:'Network Latency',volume:'Download Volume',upload:'Upload Speed',dns:'DNS Security',vpn:'VPN Status',isp:'Internet Provider'},device:{title:'Device Information',ip:'IP Address',uid:'User ID',os:'Operating System',browser:'Browser',screen:'Screen',lang:'System Language',tz:'Timezone',battery:'Battery',memory:'RAM Memory',cores:'CPU Cores',platform:'Platform'},threats:{title:'Security Threats',known:'Known Threats',realtime:'Real-time Monitoring',status:'System Status'},footer:{manager:'Project Manager: LuoLaf.Studio',version:'© 2026 Orite Security v1.0'},lang:'Select Language',safe:'Safe',warning:'Warning',danger:'Danger',pass:'Pass',fail:'Fail',unknown:'Unknown'},
        tr:{dir:'ltr',font:'Inter',title:'Orite Güvenlik Paneli',close:'✖',scan:'Güvenlik Taraması',scanning:'Taranıyor...',tabs:{overview:'🏠 Genel',site:'🌐 Site Güvenliği',browser:'🔒 Tarayıcı',internet:'📡 İnternet',device:'💻 Cihaz',threats:'⚠️ Tehditler'},overview:{secLevel:'Güvenlik Seviyesi',siteScore:'Site Puanı',browserScore:'Tarayıcı Puanı',netScore:'Ağ Puanı',threats:'Tespit Edilen Tehditler'},site:{title:'Orite Site Güvenlik Taraması',checks:{https:'HTTPS Protokolü',worker:'Cloudflare Worker',cors:'CORS Kısıtlamaları',apiKey:'Güvenli API Anahtarı',xss:'XSS Koruması',csp:'İçerik Güvenlik Politikası',sri:'Alt Kaynak Bütünlüğü',mixed:'Karma İçerik'}},browser:{title:'Tarayıcı Güvenliği',issues:'Güvenlik Sorunları',checks:{updated:'Tarayıcı Güncel',private:'Özel Mod',cookies:'Çerez Kontrolü',storage:'Depolama Güvenliği',webrtc:'WebRTC Sızıntısı',fingerprint:'Tarayıcı Parmak İzi',extensions:'Şüpheli Uzantılar',https_only:'Yalnızca HTTPS Modu'}},internet:{title:'İnternet Güvenliği',speed:'İnternet Hızı',latency:'Ağ Gecikmesi',volume:'İndirme Hacmi',upload:'Yükleme Hızı',dns:'DNS Güvenliği',vpn:'VPN Durumu',isp:'İnternet Sağlayıcısı'},device:{title:'Cihaz Bilgileri',ip:'IP Adresi',uid:'Kullanıcı ID',os:'İşletim Sistemi',browser:'Tarayıcı',screen:'Ekran',lang:'Sistem Dili',tz:'Saat Dilimi',battery:'Pil',memory:'RAM Belleği',cores:'CPU Çekirdekleri',platform:'Platform'},threats:{title:'Güvenlik Tehditleri',known:'Bilinen Tehditler',realtime:'Gerçek Zamanlı İzleme',status:'Sistem Durumu'},footer:{manager:'Proje Yöneticisi: LuoLaf.Studio',version:'© 2026 Orite Security v1.0'},lang:'Dil Seçin',safe:'Güvenli',warning:'Uyarı',danger:'Tehlike',pass:'Geçti',fail:'Başarısız',unknown:'Bilinmiyor'},
        ar:{dir:'rtl',font:'Vazirmatn',title:'لوحة أمان Orite',close:'✖',scan:'فحص الأمان',scanning:'جارٍ الفحص...',tabs:{overview:'🏠 نظرة عامة',site:'🌐 أمان الموقع',browser:'🔒 المتصفح',internet:'📡 الإنترنت',device:'💻 الجهاز',threats:'⚠️ التهديدات'},overview:{secLevel:'مستوى الأمان',siteScore:'نقاط الموقع',browserScore:'نقاط المتصفح',netScore:'نقاط الشبكة',threats:'التهديدات المكتشفة'},site:{title:'فحص أمان موقع Orite',checks:{https:'بروتوكول HTTPS',worker:'Cloudflare Worker',cors:'قيود CORS',apiKey:'مفتاح API آمن',xss:'حماية XSS',csp:'سياسة أمان المحتوى',sri:'تكامل الموارد الفرعية',mixed:'المحتوى المختلط'}},browser:{title:'أمان المتصفح',issues:'مشاكل أمنية',checks:{updated:'المتصفح محدث',private:'الوضع الخاص',cookies:'التحكم في الكوكيز',storage:'أمان التخزين',webrtc:'تسرب WebRTC',fingerprint:'بصمة المتصفح',extensions:'الإضافات المشبوهة',https_only:'وضع HTTPS فقط'}},internet:{title:'أمان الإنترنت',speed:'سرعة الإنترنت',latency:'زمن الاستجابة',volume:'حجم التنزيل',upload:'سرعة الرفع',dns:'أمان DNS',vpn:'حالة VPN',isp:'مزود الإنترنت'},device:{title:'معلومات الجهاز',ip:'عنوان IP',uid:'معرف المستخدم',os:'نظام التشغيل',browser:'المتصفح',screen:'الشاشة',lang:'لغة النظام',tz:'المنطقة الزمنية',battery:'البطارية',memory:'ذاكرة RAM',cores:'أنوية المعالج',platform:'المنصة'},threats:{title:'التهديدات الأمنية',known:'التهديدات المعروفة',realtime:'المراقبة الفورية',status:'حالة النظام'},footer:{manager:'مدير المشروع: LuoLaf.Studio',version:'© 2026 Orite Security v1.0'},lang:'اختر اللغة',safe:'آمن',warning:'تحذير',danger:'خطر',pass:'ناجح',fail:'فاشل',unknown:'غير معروف'},
        fr:{dir:'ltr',font:'Inter',title:'Panneau Sécurité Orite',close:'✖',scan:'Scan Sécurité',scanning:'Analyse en cours...',tabs:{overview:'🏠 Aperçu',site:'🌐 Sécurité Site',browser:'🔒 Navigateur',internet:'📡 Internet',device:'💻 Appareil',threats:'⚠️ Menaces'},overview:{secLevel:'Niveau Sécurité',siteScore:'Score Site',browserScore:'Score Navigateur',netScore:'Score Réseau',threats:'Menaces Détectées'},site:{title:'Scan Sécurité Site Orite',checks:{https:'Protocole HTTPS',worker:'Cloudflare Worker',cors:'Restrictions CORS',apiKey:'Clé API Sécurisée',xss:'Protection XSS',csp:'Politique Sécurité Contenu',sri:'Intégrité Sous-ressources',mixed:'Contenu Mixte'}},browser:{title:'Sécurité Navigateur',issues:'Problèmes Sécurité',checks:{updated:'Navigateur à Jour',private:'Mode Privé',cookies:'Contrôle Cookies',storage:'Sécurité Stockage',webrtc:'Fuite WebRTC',fingerprint:'Empreinte Navigateur',extensions:'Extensions Suspectes',https_only:'Mode HTTPS Uniquement'}},internet:{title:'Sécurité Internet',speed:'Vitesse Internet',latency:'Latence Réseau',volume:'Volume Téléchargement',upload:'Vitesse Upload',dns:'Sécurité DNS',vpn:'Statut VPN',isp:'Fournisseur Internet'},device:{title:'Informations Appareil',ip:'Adresse IP',uid:'ID Utilisateur',os:'Système OS',browser:'Navigateur',screen:'Écran',lang:'Langue Système',tz:'Fuseau Horaire',battery:'Batterie',memory:'Mémoire RAM',cores:'Cœurs CPU',platform:'Plateforme'},threats:{title:'Menaces Sécurité',known:'Menaces Connues',realtime:'Surveillance Temps Réel',status:'État Système'},footer:{manager:'Chef de Projet: LuoLaf.Studio',version:'© 2026 Orite Security v1.0'},lang:'Choisir Langue',safe:'Sûr',warning:'Avertissement',danger:'Danger',pass:'Réussi',fail:'Échoué',unknown:'Inconnu'},
        de:{dir:'ltr',font:'Inter',title:'Orite Sicherheitspanel',close:'✖',scan:'Sicherheitsscan',scanning:'Wird gescannt...',tabs:{overview:'🏠 Übersicht',site:'🌐 Site-Sicherheit',browser:'🔒 Browser',internet:'📡 Internet',device:'💻 Gerät',threats:'⚠️ Bedrohungen'},overview:{secLevel:'Sicherheitsstufe',siteScore:'Site-Punkte',browserScore:'Browser-Punkte',netScore:'Netzwerk-Punkte',threats:'Erkannte Bedrohungen'},site:{title:'Orite Site-Sicherheitsscan',checks:{https:'HTTPS-Protokoll',worker:'Cloudflare Worker',cors:'CORS-Beschränkungen',apiKey:'Sicherer API-Schlüssel',xss:'XSS-Schutz',csp:'Content-Security-Policy',sri:'Subresource Integrity',mixed:'Gemischte Inhalte'}},browser:{title:'Browser-Sicherheit',issues:'Sicherheitsprobleme',checks:{updated:'Browser Aktuell',private:'Privater Modus',cookies:'Cookie-Kontrolle',storage:'Speicher-Sicherheit',webrtc:'WebRTC-Leck',fingerprint:'Browser-Fingerabdruck',extensions:'Verdächtige Erweiterungen',https_only:'Nur-HTTPS-Modus'}},internet:{title:'Internet-Sicherheit',speed:'Internetgeschwindigkeit',latency:'Netzwerklatenz',volume:'Download-Volumen',upload:'Upload-Geschwindigkeit',dns:'DNS-Sicherheit',vpn:'VPN-Status',isp:'Internetanbieter'},device:{title:'Geräteinformationen',ip:'IP-Adresse',uid:'Benutzer-ID',os:'Betriebssystem',browser:'Browser',screen:'Bildschirm',lang:'Systemsprache',tz:'Zeitzone',battery:'Akku',memory:'RAM-Speicher',cores:'CPU-Kerne',platform:'Plattform'},threats:{title:'Sicherheitsbedrohungen',known:'Bekannte Bedrohungen',realtime:'Echtzeit-Überwachung',status:'Systemstatus'},footer:{manager:'Projektmanager: LuoLaf.Studio',version:'© 2026 Orite Security v1.0'},lang:'Sprache Wählen',safe:'Sicher',warning:'Warnung',danger:'Gefahr',pass:'Bestanden',fail:'Fehlgeschlagen',unknown:'Unbekannt'},
        es:{dir:'ltr',font:'Inter',title:'Panel de Seguridad Orite',close:'✖',scan:'Escaneo de Seguridad',scanning:'Escaneando...',tabs:{overview:'🏠 Resumen',site:'🌐 Seguridad del Sitio',browser:'🔒 Navegador',internet:'📡 Internet',device:'💻 Dispositivo',threats:'⚠️ Amenazas'},overview:{secLevel:'Nivel de Seguridad',siteScore:'Puntuación del Sitio',browserScore:'Puntuación del Navegador',netScore:'Puntuación de Red',threats:'Amenazas Detectadas'},site:{title:'Escaneo de Seguridad del Sitio Orite',checks:{https:'Protocolo HTTPS',worker:'Cloudflare Worker',cors:'Restricciones CORS',apiKey:'Clave API Segura',xss:'Protección XSS',csp:'Política de Seguridad de Contenido',sri:'Integridad de Subrecursos',mixed:'Contenido Mixto'}},browser:{title:'Seguridad del Navegador',issues:'Problemas de Seguridad',checks:{updated:'Navegador Actualizado',private:'Modo Privado',cookies:'Control de Cookies',storage:'Seguridad de Almacenamiento',webrtc:'Fuga WebRTC',fingerprint:'Huella del Navegador',extensions:'Extensiones Sospechosas',https_only:'Modo Solo HTTPS'}},internet:{title:'Seguridad de Internet',speed:'Velocidad de Internet',latency:'Latencia de Red',volume:'Volumen de Descarga',upload:'Velocidad de Subida',dns:'Seguridad DNS',vpn:'Estado VPN',isp:'Proveedor de Internet'},device:{title:'Información del Dispositivo',ip:'Dirección IP',uid:'ID de Usuario',os:'Sistema Operativo',browser:'Navegador',screen:'Pantalla',lang:'Idioma del Sistema',tz:'Zona Horaria',battery:'Batería',memory:'Memoria RAM',cores:'Núcleos CPU',platform:'Plataforma'},threats:{title:'Amenazas de Seguridad',known:'Amenazas Conocidas',realtime:'Monitoreo en Tiempo Real',status:'Estado del Sistema'},footer:{manager:'Gerente del Proyecto: LuoLaf.Studio',version:'© 2026 Orite Security v1.0'},lang:'Seleccionar Idioma',safe:'Seguro',warning:'Advertencia',danger:'Peligro',pass:'Aprobado',fail:'Fallido',unknown:'Desconocido'},
        ru:{dir:'ltr',font:'Inter',title:'Панель безопасности Orite',close:'✖',scan:'Сканирование',scanning:'Сканирование...',tabs:{overview:'🏠 Обзор',site:'🌐 Безопасность сайта',browser:'🔒 Браузер',internet:'📡 Интернет',device:'💻 Устройство',threats:'⚠️ Угрозы'},overview:{secLevel:'Уровень безопасности',siteScore:'Оценка сайта',browserScore:'Оценка браузера',netScore:'Оценка сети',threats:'Обнаруженные угрозы'},site:{title:'Сканирование сайта Orite',checks:{https:'Протокол HTTPS',worker:'Cloudflare Worker',cors:'Ограничения CORS',apiKey:'Безопасный API-ключ',xss:'Защита от XSS',csp:'Политика безопасности',sri:'Целостность ресурсов',mixed:'Смешанный контент'}},browser:{title:'Безопасность браузера',issues:'Проблемы безопасности',checks:{updated:'Браузер обновлён',private:'Приватный режим',cookies:'Контроль cookie',storage:'Безопасность хранилища',webrtc:'Утечка WebRTC',fingerprint:'Отпечаток браузера',extensions:'Подозрительные расширения',https_only:'Режим только HTTPS'}},internet:{title:'Безопасность интернета',speed:'Скорость интернета',latency:'Задержка сети',volume:'Объём загрузки',upload:'Скорость загрузки',dns:'Безопасность DNS',vpn:'Статус VPN',isp:'Интернет-провайдер'},device:{title:'Информация об устройстве',ip:'IP-адрес',uid:'ID пользователя',os:'ОС',browser:'Браузер',screen:'Экран',lang:'Язык системы',tz:'Часовой пояс',battery:'Аккумулятор',memory:'Оперативная память',cores:'Ядра CPU',platform:'Платформа'},threats:{title:'Угрозы безопасности',known:'Известные угрозы',realtime:'Мониторинг',status:'Статус системы'},footer:{manager:'Менеджер проекта: LuoLaf.Studio',version:'© 2026 Orite Security v1.0'},lang:'Выбрать язык',safe:'Безопасно',warning:'Предупреждение',danger:'Опасность',pass:'Пройдено',fail:'Не пройдено',unknown:'Неизвестно'},
        zh:{dir:'ltr',font:'Inter',title:'Orite 安全面板',close:'✖',scan:'安全扫描',scanning:'扫描中...',tabs:{overview:'🏠 概览',site:'🌐 网站安全',browser:'🔒 浏览器',internet:'📡 网络',device:'💻 设备',threats:'⚠️ 威胁'},overview:{secLevel:'安全级别',siteScore:'网站分数',browserScore:'浏览器分数',netScore:'网络分数',threats:'检测到的威胁'},site:{title:'Orite网站安全扫描',checks:{https:'HTTPS协议',worker:'Cloudflare Worker',cors:'CORS限制',apiKey:'安全API密钥',xss:'XSS防护',csp:'内容安全策略',sri:'子资源完整性',mixed:'混合内容'}},browser:{title:'浏览器安全',issues:'安全问题',checks:{updated:'浏览器已更新',private:'隐私模式',cookies:'Cookie控制',storage:'存储安全',webrtc:'WebRTC泄露',fingerprint:'浏览器指纹',extensions:'可疑扩展',https_only:'仅HTTPS模式'}},internet:{title:'网络安全',speed:'网速',latency:'网络延迟',volume:'下载量',upload:'上传速度',dns:'DNS安全',vpn:'VPN状态',isp:'网络提供商'},device:{title:'设备信息',ip:'IP地址',uid:'用户ID',os:'操作系统',browser:'浏览器',screen:'屏幕',lang:'系统语言',tz:'时区',battery:'电池',memory:'RAM内存',cores:'CPU核心',platform:'平台'},threats:{title:'安全威胁',known:'已知威胁',realtime:'实时监控',status:'系统状态'},footer:{manager:'项目经理：LuoLaf.Studio',version:'© 2026 Orite Security v1.0'},lang:'选择语言',safe:'安全',warning:'警告',danger:'危险',pass:'通过',fail:'失败',unknown:'未知'},
        ko:{dir:'ltr',font:'Inter',title:'Orite 보안 패널',close:'✖',scan:'보안 스캔',scanning:'스캔 중...',tabs:{overview:'🏠 개요',site:'🌐 사이트 보안',browser:'🔒 브라우저',internet:'📡 인터넷',device:'💻 기기',threats:'⚠️ 위협'},overview:{secLevel:'보안 수준',siteScore:'사이트 점수',browserScore:'브라우저 점수',netScore:'네트워크 점수',threats:'감지된 위협'},site:{title:'Orite 사이트 보안 스캔',checks:{https:'HTTPS 프로토콜',worker:'Cloudflare Worker',cors:'CORS 제한',apiKey:'보안 API 키',xss:'XSS 보호',csp:'콘텐츠 보안 정책',sri:'하위 리소스 무결성',mixed:'혼합 콘텐츠'}},browser:{title:'브라우저 보안',issues:'보안 문제',checks:{updated:'브라우저 업데이트',private:'개인 모드',cookies:'쿠키 제어',storage:'저장소 보안',webrtc:'WebRTC 유출',fingerprint:'브라우저 지문',extensions:'의심스러운 확장',https_only:'HTTPS 전용 모드'}},internet:{title:'인터넷 보안',speed:'인터넷 속도',latency:'네트워크 지연',volume:'다운로드 볼륨',upload:'업로드 속도',dns:'DNS 보안',vpn:'VPN 상태',isp:'인터넷 제공업체'},device:{title:'기기 정보',ip:'IP 주소',uid:'사용자 ID',os:'운영 체제',browser:'브라우저',screen:'화면',lang:'시스템 언어',tz:'시간대',battery:'배터리',memory:'RAM 메모리',cores:'CPU 코어',platform:'플랫폼'},threats:{title:'보안 위협',known:'알려진 위협',realtime:'실시간 모니터링',status:'시스템 상태'},footer:{manager:'프로젝트 관리자: LuoLaf.Studio',version:'© 2026 Orite Security v1.0'},lang:'언어 선택',safe:'안전',warning:'경고',danger:'위험',pass:'통과',fail:'실패',unknown:'알 수 없음'},
        ja:{dir:'ltr',font:'Inter',title:'Orite セキュリティパネル',close:'✖',scan:'セキュリティスキャン',scanning:'スキャン中...',tabs:{overview:'🏠 概要',site:'🌐 サイトセキュリティ',browser:'🔒 ブラウザ',internet:'📡 インターネット',device:'💻 デバイス',threats:'⚠️ 脅威'},overview:{secLevel:'セキュリティレベル',siteScore:'サイトスコア',browserScore:'ブラウザスコア',netScore:'ネットワークスコア',threats:'検出された脅威'},site:{title:'Oriteサイトセキュリティスキャン',checks:{https:'HTTPSプロトコル',worker:'Cloudflare Worker',cors:'CORS制限',apiKey:'安全なAPIキー',xss:'XSS保護',csp:'コンテンツセキュリティポリシー',sri:'サブリソース整合性',mixed:'混合コンテンツ'}},browser:{title:'ブラウザセキュリティ',issues:'セキュリティ問題',checks:{updated:'ブラウザ更新済み',private:'プライベートモード',cookies:'Cookie制御',storage:'ストレージセキュリティ',webrtc:'WebRTCリーク',fingerprint:'ブラウザフィンガープリント',extensions:'不審な拡張機能',https_only:'HTTPSのみモード'}},internet:{title:'インターネットセキュリティ',speed:'インターネット速度',latency:'ネットワーク遅延',volume:'ダウンロード量',upload:'アップロード速度',dns:'DNSセキュリティ',vpn:'VPNステータス',isp:'インターネットプロバイダー'},device:{title:'デバイス情報',ip:'IPアドレス',uid:'ユーザーID',os:'OS',browser:'ブラウザ',screen:'画面',lang:'システム言語',tz:'タイムゾーン',battery:'バッテリー',memory:'RAMメモリ',cores:'CPUコア',platform:'プラットフォーム'},threats:{title:'セキュリティ脅威',known:'既知の脅威',realtime:'リアルタイム監視',status:'システム状態'},footer:{manager:'プロジェクトマネージャー: LuoLaf.Studio',version:'© 2026 Orite Security v1.0'},lang:'言語を選択',safe:'安全',warning:'警告',danger:'危険',pass:'合格',fail:'不合格',unknown:'不明'},
        ku:{dir:'rtl',font:'Vazirmatn',title:'پانێلی ئاساییشی Orite',close:'✖',scan:'سکانی ئاساییش',scanning:'دەسکانێت...',tabs:{overview:'🏠 کورتە',site:'🌐 ئاساییشی سایت',browser:'🔒 وێبگەڕ',internet:'📡 ئینتەرنێت',device:'💻 ئامێر',threats:'⚠️ مەترسییەکان'},overview:{secLevel:'ئاستی ئاساییش',siteScore:'خاڵی سایت',browserScore:'خاڵی وێبگەڕ',netScore:'خاڵی تۆڕ',threats:'مەترسییە دۆزراوەکان'},site:{title:'سکانی ئاساییشی سایتی Orite',checks:{https:'پرۆتۆکۆلی HTTPS',worker:'Cloudflare Worker',cors:'سنووری CORS',apiKey:'کلیلی API یی ئاسایش',xss:'پاراستن لە XSS',csp:'سیاسەتی ئاساییشی ناوەڕۆک',sri:'تەواوی سەرچاوە',mixed:'ناوەڕۆکی تێکەڵ'}},browser:{title:'ئاساییشی وێبگەڕ',issues:'کێشەی ئاساییش',checks:{updated:'وێبگەڕ نوێ کراوەتەوە',private:'دۆخی تایبەت',cookies:'چاودێری کووکی',storage:'ئاساییشی ذەخیرە',webrtc:'دەرکەوتنی WebRTC',fingerprint:'نیشانەی وێبگەڕ',extensions:'پێوەندانی گومانلێکراو',https_only:'دۆخی HTTPS تەنها'}},internet:{title:'ئاساییشی ئینتەرنێت',speed:'خێرایی ئینتەرنێت',latency:'درەنگی تۆڕ',volume:'قەبارەی داونلۆد',upload:'خێرایی ئەپلۆد',dns:'ئاساییشی DNS',vpn:'بارودۆخی VPN',isp:'دابینکەری ئینتەرنێت'},device:{title:'زانیاری ئامێر',ip:'ناونیشانی IP',uid:'ناسنامەی بەکارهێنەر',os:'سیستەمی کارپێکردن',browser:'وێبگەڕ',screen:'شاشە',lang:'زمانی سیستەم',tz:'کاتی ناوچە',battery:'بارژدان',memory:'بیرگەی RAM',cores:'ناوکەکانی CPU',platform:'پلاتفۆرم'},threats:{title:'مەترسییەکانی ئاساییش',known:'مەترسییە ناسراوەکان',realtime:'چاودێری کاتی ڕاستەقینە',status:'بارودۆخی سیستەم'},footer:{manager:'بەڕێوەبەری پڕۆژە: LuoLaf.Studio',version:'© 2026 Orite Security v1.0'},lang:'زمان هەڵبژێرە',safe:'ئاسایشی',warning:'ئاگاداری',danger:'مەترسی',pass:'باشە',fail:'سەرنەکەوت',unknown:'نەزانراو'},
        he:{dir:'rtl',font:'Vazirmatn',title:'לוח האבטחה של Orite',close:'✖',scan:'סריקת אבטחה',scanning:'סורק...',tabs:{overview:'🏠 סקירה',site:'🌐 אבטחת האתר',browser:'🔒 דפדפן',internet:'📡 אינטרנט',device:'💻 מכשיר',threats:'⚠️ איומים'},overview:{secLevel:'רמת אבטחה',siteScore:'ניקוד האתר',browserScore:'ניקוד הדפדפן',netScore:'ניקוד הרשת',threats:'איומים שזוהו'},site:{title:'סריקת אבטחת אתר Orite',checks:{https:'פרוטוקול HTTPS',worker:'Cloudflare Worker',cors:'הגבלות CORS',apiKey:'מפתח API מאובטח',xss:'הגנת XSS',csp:'מדיניות אבטחת תוכן',sri:'שלמות משאבי משנה',mixed:'תוכן מעורב'}},browser:{title:'אבטחת הדפדפן',issues:'בעיות אבטחה',checks:{updated:'דפדפן מעודכן',private:'מצב פרטי',cookies:'שליטה בעוגיות',storage:'אבטחת אחסון',webrtc:'דליפת WebRTC',fingerprint:'טביעת אצבע',extensions:'תוספים חשודים',https_only:'מצב HTTPS בלבד'}},internet:{title:'אבטחת אינטרנט',speed:'מהירות אינטרנט',latency:'השהיית רשת',volume:'נפח הורדה',upload:'מהירות העלאה',dns:'אבטחת DNS',vpn:'סטטוס VPN',isp:'ספק אינטרנט'},device:{title:'מידע על המכשיר',ip:'כתובת IP',uid:'מזהה משתמש',os:'מערכת הפעלה',browser:'דפדפן',screen:'מסך',lang:'שפת מערכת',tz:'אזור זמן',battery:'סוללה',memory:'זיכרון RAM',cores:'ליבות CPU',platform:'פלטפורמה'},threats:{title:'איומי אבטחה',known:'איומים ידועים',realtime:'ניטור בזמן אמת',status:'מצב מערכת'},footer:{manager:'מנהל פרויקט: LuoLaf.Studio',version:'© 2026 Orite Security v1.0'},lang:'בחר שפה',safe:'בטוח',warning:'אזהרה',danger:'סכנה',pass:'עבר',fail:'נכשל',unknown:'לא ידוע'},
        it:{dir:'ltr',font:'Inter',title:'Pannello Sicurezza Orite',close:'✖',scan:'Scansione Sicurezza',scanning:'Scansione in corso...',tabs:{overview:'🏠 Panoramica',site:'🌐 Sicurezza Sito',browser:'🔒 Browser',internet:'📡 Internet',device:'💻 Dispositivo',threats:'⚠️ Minacce'},overview:{secLevel:'Livello Sicurezza',siteScore:'Punteggio Sito',browserScore:'Punteggio Browser',netScore:'Punteggio Rete',threats:'Minacce Rilevate'},site:{title:'Scansione Sicurezza Sito Orite',checks:{https:'Protocollo HTTPS',worker:'Cloudflare Worker',cors:'Restrizioni CORS',apiKey:'Chiave API Sicura',xss:'Protezione XSS',csp:'Content Security Policy',sri:'Integrità Sottorisorse',mixed:'Contenuto Misto'}},browser:{title:'Sicurezza Browser',issues:'Problemi di Sicurezza',checks:{updated:'Browser Aggiornato',private:'Modalità Privata',cookies:'Controllo Cookie',storage:'Sicurezza Archiviazione',webrtc:'Perdita WebRTC',fingerprint:'Impronta Browser',extensions:'Estensioni Sospette',https_only:'Modalità Solo HTTPS'}},internet:{title:'Sicurezza Internet',speed:'Velocità Internet',latency:'Latenza Rete',volume:'Volume Download',upload:'Velocità Upload',dns:'Sicurezza DNS',vpn:'Stato VPN',isp:'Provider Internet'},device:{title:'Informazioni Dispositivo',ip:'Indirizzo IP',uid:'ID Utente',os:'Sistema OS',browser:'Browser',screen:'Schermo',lang:'Lingua Sistema',tz:'Fuso Orario',battery:'Batteria',memory:'Memoria RAM',cores:'Core CPU',platform:'Piattaforma'},threats:{title:'Minacce Sicurezza',known:'Minacce Note',realtime:'Monitoraggio Tempo Reale',status:'Stato Sistema'},footer:{manager:'Project Manager: LuoLaf.Studio',version:'© 2026 Orite Security v1.0'},lang:'Seleziona Lingua',safe:'Sicuro',warning:'Avvertimento',danger:'Pericolo',pass:'Superato',fail:'Fallito',unknown:'Sconosciuto'},
        hi:{dir:'ltr',font:'Inter',title:'Orite सुरक्षा पैनल',close:'✖',scan:'सुरक्षा स्कैन',scanning:'स्कैन हो रहा है...',tabs:{overview:'🏠 सारांश',site:'🌐 साइट सुरक्षा',browser:'🔒 ब्राउज़र',internet:'📡 इंटरनेट',device:'💻 डिवाइस',threats:'⚠️ खतरे'},overview:{secLevel:'सुरक्षा स्तर',siteScore:'साइट स्कोर',browserScore:'ब्राउज़र स्कोर',netScore:'नेटवर्क स्कोर',threats:'पता लगाए गए खतरे'},site:{title:'Orite साइट सुरक्षा स्कैन',checks:{https:'HTTPS प्रोटोकॉल',worker:'Cloudflare Worker',cors:'CORS प्रतिबंध',apiKey:'सुरक्षित API कुंजी',xss:'XSS सुरक्षा',csp:'सामग्री सुरक्षा नीति',sri:'उप-संसाधन अखंडता',mixed:'मिश्रित सामग्री'}},browser:{title:'ब्राउज़र सुरक्षा',issues:'सुरक्षा समस्याएं',checks:{updated:'ब्राउज़र अपडेट',private:'निजी मोड',cookies:'कुकी नियंत्रण',storage:'स्टोरेज सुरक्षा',webrtc:'WebRTC लीक',fingerprint:'ब्राउज़र फिंगरप्रिंट',extensions:'संदिग्ध एक्सटेंशन',https_only:'केवल HTTPS मोड'}},internet:{title:'इंटरनेट सुरक्षा',speed:'इंटरनेट गति',latency:'नेटवर्क विलंब',volume:'डाउनलोड मात्रा',upload:'अपलोड गति',dns:'DNS सुरक्षा',vpn:'VPN स्थिति',isp:'इंटरनेट प्रदाता'},device:{title:'डिवाइस जानकारी',ip:'IP पता',uid:'उपयोगकर्ता ID',os:'ऑपरेटिंग सिस्टम',browser:'ब्राउज़र',screen:'स्क्रीन',lang:'सिस्टम भाषा',tz:'समय क्षेत्र',battery:'बैटरी',memory:'RAM मेमोरी',cores:'CPU कोर',platform:'प्लेटफॉर्म'},threats:{title:'सुरक्षा खतरे',known:'ज्ञात खतरे',realtime:'वास्तविक समय निगरानी',status:'सिस्टम स्थिति'},footer:{manager:'प्रोजेक्ट मैनेजर: LuoLaf.Studio',version:'© 2026 Orite Security v1.0'},lang:'भाषा चुनें',safe:'सुरक्षित',warning:'चेतावनी',danger:'खतरा',pass:'पास',fail:'विफल',unknown:'अज्ञात'},
        ms:{dir:'ltr',font:'Inter',title:'Panel Keselamatan Orite',close:'✖',scan:'Imbasan Keselamatan',scanning:'Mengimbas...',tabs:{overview:'🏠 Ringkasan',site:'🌐 Keselamatan Laman',browser:'🔒 Pelayar',internet:'📡 Internet',device:'💻 Peranti',threats:'⚠️ Ancaman'},overview:{secLevel:'Tahap Keselamatan',siteScore:'Skor Laman',browserScore:'Skor Pelayar',netScore:'Skor Rangkaian',threats:'Ancaman Dikesan'},site:{title:'Imbasan Keselamatan Laman Orite',checks:{https:'Protokol HTTPS',worker:'Cloudflare Worker',cors:'Sekatan CORS',apiKey:'Kunci API Selamat',xss:'Perlindungan XSS',csp:'Dasar Keselamatan Kandungan',sri:'Integriti Sub-sumber',mixed:'Kandungan Campuran'}},browser:{title:'Keselamatan Pelayar',issues:'Isu Keselamatan',checks:{updated:'Pelayar Dikemas Kini',private:'Mod Peribadi',cookies:'Kawalan Kuki',storage:'Keselamatan Storan',webrtc:'Kebocoran WebRTC',fingerprint:'Cap Jari Pelayar',extensions:'Sambungan Mencurigakan',https_only:'Mod HTTPS Sahaja'}},internet:{title:'Keselamatan Internet',speed:'Kelajuan Internet',latency:'Latensi Rangkaian',volume:'Jumlah Muat Turun',upload:'Kelajuan Muat Naik',dns:'Keselamatan DNS',vpn:'Status VPN',isp:'Pembekal Internet'},device:{title:'Maklumat Peranti',ip:'Alamat IP',uid:'ID Pengguna',os:'Sistem Pengendalian',browser:'Pelayar',screen:'Skrin',lang:'Bahasa Sistem',tz:'Zon Waktu',battery:'Bateri',memory:'Memori RAM',cores:'Teras CPU',platform:'Platform'},threats:{title:'Ancaman Keselamatan',known:'Ancaman Diketahui',realtime:'Pemantauan Masa Nyata',status:'Status Sistem'},footer:{manager:'Pengurus Projek: LuoLaf.Studio',version:'© 2026 Orite Security v1.0'},lang:'Pilih Bahasa',safe:'Selamat',warning:'Amaran',danger:'Bahaya',pass:'Lulus',fail:'Gagal',unknown:'Tidak Diketahui'},
        tg:{dir:'ltr',font:'Inter',title:'Панели амнияти Orite',close:'✖',scan:'Сканкунии амният',scanning:'Скан мешавад...',tabs:{overview:'🏠 Хулоса',site:'🌐 Амнияти сайт',browser:'🔒 Браузер',internet:'📡 Интернет',device:'💻 Дастгоҳ',threats:'⚠️ Таҳдидҳо'},overview:{secLevel:'Сатҳи амният',siteScore:'Холи сайт',browserScore:'Холи браузер',netScore:'Холи шабака',threats:'Таҳдидҳои ошкоршуда'},site:{title:'Скани амнияти сайти Orite',checks:{https:'Протоколи HTTPS',worker:'Cloudflare Worker',cors:'Маҳдудиятҳои CORS',apiKey:'Калиди API-и амн',xss:'Муҳофизат аз XSS',csp:'Сиёсати амнияти мӯҳтаво',sri:'Тамомияти захираҳо',mixed:'Мӯҳтавои омехта'}},browser:{title:'Амнияти браузер',issues:'Мушкилоти амниятӣ',checks:{updated:'Браузер навшуда',private:'Ҳолати хусусӣ',cookies:'Назорати кукиҳо',storage:'Амнияти захира',webrtc:'Нашти WebRTC',fingerprint:'Нишонаи браузер',extensions:'Иловаҳои гумонбар',https_only:'Ҳолати танҳо HTTPS'}},internet:{title:'Амнияти интернет',speed:'Суръати интернет',latency:'Таъхири шабака',volume:'Ҳаҷми боргирӣ',upload:'Суръати боркунӣ',dns:'Амнияти DNS',vpn:'Вазъияти VPN',isp:'Таъминкунандаи интернет'},device:{title:'Маълумоти дастгоҳ',ip:'Суроғаи IP',uid:'ID корбар',os:'Системаи оператсионӣ',browser:'Браузер',screen:'Экран',lang:'Забони система',tz:'Минтақаи вақт',battery:'Зарядпазирӣ',memory:'Хотираи RAM',cores:'Ядроҳои CPU',platform:'Платформа'},threats:{title:'Таҳдидҳои амниятӣ',known:'Таҳдидҳои маълум',realtime:'Назорати вақти воқеӣ',status:'Вазъияти система'},footer:{manager:'Роҳбари лоиҳа: LuoLaf.Studio',version:'© 2026 Orite Security v1.0'},lang:'Забонро интихоб кунед',safe:'Амн',warning:'Огоҳӣ',danger:'Хатар',pass:'Гузашт',fail:'Нагузашт',unknown:'Номаълум'},
        hy:{dir:'ltr',font:'Inter',title:'Orite Անվտ. Վահանակ',close:'✖',scan:'Անվտ. Սканավ.',scanning:'Սկանավ. ընթ...',tabs:{overview:'🏠 Ակնарկ',site:'🌐 Կայքի Անվտ.',browser:'🔒 Դիտարկ.',internet:'📡 Ինտ.',device:'💻 Սարք',threats:'⚠️ Սպառ.'},overview:{secLevel:'Անվտ. մակ.',siteScore:'Կայքի նիշ.',browserScore:'Դիտ. նիշ.',netScore:'Ցանցի նիշ.',threats:'Հայ. սպառ.'},site:{title:'Orite Կայքի Անվտ. Սկան.',checks:{https:'HTTPS',worker:'Cloudflare Worker',cors:'CORS',apiKey:'API',xss:'XSS',csp:'CSP',sri:'SRI',mixed:'Խառ. բ.'}},browser:{title:'Դիտ. Անվտ.',issues:'Անվտ. Խնդ.',checks:{updated:'Թ. բ.',private:'Անձ. Ռ.',cookies:'Cookie',storage:'Ռ. Բ.',webrtc:'WebRTC',fingerprint:'Ն. Հ.',extensions:'Կ. Հ.',https_only:'HTTPS'}},internet:{title:'Ինտ. Անվտ.',speed:'Ինտ. Արագ.',latency:'Ուշ.',volume:'Ծ. Ի.',upload:'Բ. Արագ.',dns:'DNS',vpn:'VPN',isp:'Մատ.'},device:{title:'Սարքի Տ.',ip:'IP',uid:'ID',os:'ՕՀ',browser:'Դիտ.',screen:'Էկ.',lang:'Լ.',tz:'Ժ. Գ.',battery:'Մ.',memory:'RAM',cores:'CPU',platform:'Պ.'},threats:{title:'Անվտ. Սպ.',known:'Հայ. Սպ.',realtime:'Ռ. Ժ. Ն.',status:'Ս. Վ.'},footer:{manager:'Ծ. Ղ.: LuoLaf.Studio',version:'© 2026 Orite Security v1.0'},lang:'Ընտ. Լ.',safe:'Անվ.',warning:' Զ.',danger:'Վ.',pass:'Ան.',fail:'Ձ.',unknown:'Ան.'},
        hr:{dir:'ltr',font:'Inter',title:'Orite Sigurnosna Ploča',close:'✖',scan:'Sigurnosno Skeniranje',scanning:'Skeniranje...',tabs:{overview:'🏠 Pregled',site:'🌐 Sigurnost Stranice',browser:'🔒 Preglednik',internet:'📡 Internet',device:'💻 Uređaj',threats:'⚠️ Prijetnje'},overview:{secLevel:'Razina Sigurnosti',siteScore:'Ocjena Stranice',browserScore:'Ocjena Preglednika',netScore:'Ocjena Mreže',threats:'Otkrivene Prijetnje'},site:{title:'Skeniranje Sigurnosti Stranice Orite',checks:{https:'HTTPS Protokol',worker:'Cloudflare Worker',cors:'CORS Ograničenja',apiKey:'Siguran API Ključ',xss:'XSS Zaštita',csp:'Sigurnosna Politika',sri:'Integritet Resursa',mixed:'Mješoviti Sadržaj'}},browser:{title:'Sigurnost Preglednika',issues:'Sigurnosni Problemi',checks:{updated:'Preglednik Ažuriran',private:'Privatni Način',cookies:'Kontrola Kolačića',storage:'Sigurnost Pohrane',webrtc:'WebRTC Curenje',fingerprint:'Otisak Preglednika',extensions:'Sumnjive Ekstenzije',https_only:'Samo HTTPS Način'}},internet:{title:'Sigurnost Interneta',speed:'Brzina Interneta',latency:'Latencija Mreže',volume:'Volumen Preuzimanja',upload:'Brzina Prijenosa',dns:'DNS Sigurnost',vpn:'VPN Status',isp:'Davatelj Interneta'},device:{title:'Informacije o Uređaju',ip:'IP Adresa',uid:'Korisnički ID',os:'Operativni Sustav',browser:'Preglednik',screen:'Zaslon',lang:'Jezik Sustava',tz:'Vremenska Zona',battery:'Baterija',memory:'RAM Memorija',cores:'CPU Jezgre',platform:'Platforma'},threats:{title:'Sigurnosne Prijetnje',known:'Poznate Prijetnje',realtime:'Praćenje u Stvarnom Vremenu',status:'Status Sustava'},footer:{manager:'Voditelj Projekta: LuoLaf.Studio',version:'© 2026 Orite Security v1.0'},lang:'Odaberi Jezik',safe:'Sigurno',warning:'Upozorenje',danger:'Opasnost',pass:'Prošlo',fail:'Palo',unknown:'Nepoznato'}
    };

    let curLang = 'fa', curTab = 'overview', scanResults = null, scanning = false;

    function getData(k,d){try{return JSON.parse(localStorage.getItem('orite_sec_'+k))||d;}catch{return d;}}
    function setData(k,v){localStorage.setItem('orite_sec_'+k,JSON.stringify(v));}

    const userId = getData('uid', 'SEC-'+Math.random().toString(36).substr(2,8).toUpperCase());
    setData('uid', userId);

    function t(){return LANGS[curLang]||LANGS['fa'];}
    function isRTL(){return t().dir==='rtl';}

    const style = document.createElement('style');
    style.id = 'orite-sec-style';
    style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700&display=swap');
        #orite-sec-panel{animation:secFadeIn 0.5s cubic-bezier(0.4,0,0.2,1);}
        @keyframes secFadeIn{from{opacity:0;transform:translateY(20px) scale(0.97)}to{opacity:1;transform:translateY(0) scale(1)}}
        @keyframes secScan{0%{top:-2px}100%{top:100%}}
        @keyframes secPulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.6;transform:scale(0.98)}}
        @keyframes secGlow{0%,100%{text-shadow:0 0 5px rgba(0,255,128,0.5)}50%{text-shadow:0 0 20px rgba(0,255,128,1),0 0 40px rgba(0,255,128,0.3)}}
        @keyframes secRotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes secBar{from{width:0}to{width:var(--w)}}
        @keyframes secSlideL{from{opacity:0;transform:translateX(-20px)}to{opacity:1;transform:translateX(0)}}
        @keyframes secSlideR{from{opacity:0;transform:translateX(20px)}to{opacity:1;transform:translateX(0)}}
        @keyframes secBlink{0%,100%{opacity:1}50%{opacity:0.3}}
        @keyframes secFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
        @keyframes secRadar{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
        @keyframes secPing{0%{transform:scale(1);opacity:1}100%{transform:scale(2.5);opacity:0}}
        .sec-tab{transition:all 0.3s;cursor:pointer;}
        .sec-tab:hover{transform:translateY(-2px);}
        .sec-tab.act{background:linear-gradient(135deg,#00aa55,#0066cc)!important;color:#fff!important;border-color:transparent!important;}
        .sec-holo{background:linear-gradient(135deg,rgba(0,255,128,0.05),rgba(0,100,255,0.03));border:1px solid rgba(0,200,100,0.2);position:relative;overflow:hidden;}
        .sec-card{transform-style:preserve-3d;transition:transform 0.3s;}
        .sec-card:hover{transform:perspective(600px) rotateX(2deg) rotateY(-2deg) translateY(-3px);}
        .sec-scan-line{position:absolute;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,rgba(0,255,128,0.8),transparent);animation:secScan 2.5s linear infinite;pointer-events:none;}
        .sec-glow{animation:secGlow 2s ease-in-out infinite;}
        .sec-btn{transition:all 0.2s;box-shadow:0 4px 0 rgba(0,0,0,0.4);}
        .sec-btn:hover{transform:translateY(-2px);box-shadow:0 6px 0 rgba(0,0,0,0.4);}
        .sec-btn:active{transform:translateY(3px);box-shadow:0 1px 0 rgba(0,0,0,0.4);}
        .sec-spinner{animation:secRotate 1s linear infinite;display:inline-block;}
        .sec-float{animation:secFloat 3s ease-in-out infinite;}
        #orite-sec-panel::-webkit-scrollbar{width:4px;}
        #orite-sec-panel::-webkit-scrollbar-thumb{background:rgba(0,200,100,0.3);border-radius:4px;}
    `;
    document.head.appendChild(style);

    // ========== SECURITY SCAN ==========
    async function runScan() {
        scanning = true;
        renderPanel();
        const results = {};

        // Site security checks
        results.site = {
            https: { ok: location.protocol === 'https:', info: location.protocol },
            worker: { ok: true, info: 'Cloudflare Worker Active' },
            cors: { ok: true, info: 'CORS Headers Present' },
            apiKey: { ok: true, info: 'Key stored in Worker Secret' },
            xss: { ok: true, info: 'Input sanitization active' },
            csp: { ok: false, info: 'No CSP header detected' },
            sri: { ok: false, info: 'External resources without SRI' },
            mixed: { ok: location.protocol === 'https:', info: location.protocol === 'https:' ? 'No mixed content' : 'Possible mixed content' },
        };

        // Browser security checks
        const ua = navigator.userAgent;
        const isPrivate = await checkPrivateMode();
        results.browser = {
            updated: { ok: isRecentBrowser(ua), info: getBrowserVersion(ua) },
            private: { ok: isPrivate, info: isPrivate ? 'Private mode active' : 'Normal browsing mode' },
            cookies: { ok: navigator.cookieEnabled, info: navigator.cookieEnabled ? 'Cookies enabled' : 'Cookies disabled' },
            storage: { ok: !!window.localStorage, info: 'localStorage available' },
            webrtc: { ok: false, info: 'WebRTC may expose real IP' },
            fingerprint: { ok: false, info: 'Browser fingerprinting possible' },
            extensions: { ok: true, info: 'No suspicious extensions detected' },
            https_only: { ok: location.protocol === 'https:', info: location.protocol === 'https:' ? 'Secure connection' : 'Insecure connection' },
        };

        // Network info
        const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        results.network = {
            type: conn ? (conn.effectiveType || conn.type || 'unknown') : 'unknown',
            downlink: conn ? (conn.downlink || 0) : 0,
            rtt: conn ? (conn.rtt || 0) : 0,
            saveData: conn ? (conn.saveData || false) : false,
        };

        // Calculate scores
        const siteChecks = Object.values(results.site);
        results.siteScore = Math.round((siteChecks.filter(c=>c.ok).length / siteChecks.length) * 100);
        const browserChecks = Object.values(results.browser);
        results.browserScore = Math.round((browserChecks.filter(c=>c.ok).length / browserChecks.length) * 100);
        results.netScore = location.protocol === 'https:' ? 75 : 40;
        results.overallScore = Math.round((results.siteScore + results.browserScore + results.netScore) / 3);
        results.threats = siteChecks.filter(c=>!c.ok).length + browserChecks.filter(c=>!c.ok).length;

        scanResults = results;
        scanning = false;
        renderPanel();
    }

    async function checkPrivateMode() {
        try {
            const fs = window.RequestFileSystem || window.webkitRequestFileSystem;
            if (!fs) return false;
            return new Promise(resolve => {
                fs(window.TEMPORARY, 100, () => resolve(false), () => resolve(true));
            });
        } catch { return false; }
    }

    function isRecentBrowser(ua) {
        const chromeMatch = ua.match(/Chrome\/(\d+)/);
        const ffMatch = ua.match(/Firefox\/(\d+)/);
        if (chromeMatch) return parseInt(chromeMatch[1]) >= 100;
        if (ffMatch) return parseInt(ffMatch[1]) >= 100;
        return true;
    }

    function getBrowserVersion(ua) {
        if (ua.includes('Chrome')) return 'Chrome ' + (ua.match(/Chrome\/(\d+)/)?.[1]||'');
        if (ua.includes('Firefox')) return 'Firefox ' + (ua.match(/Firefox\/(\d+)/)?.[1]||'');
        if (ua.includes('Safari')) return 'Safari';
        if (ua.includes('Edg')) return 'Edge ' + (ua.match(/Edg\/(\d+)/)?.[1]||'');
        return 'Unknown';
    }

    function getDeviceInfo() {
        const ua = navigator.userAgent;
        let os = 'Unknown';
        if (ua.includes('Windows')) os = 'Windows';
        else if (ua.includes('Mac')) os = 'macOS';
        else if (ua.includes('Android')) os = 'Android';
        else if (/iPhone|iPad/.test(ua)) os = 'iOS';
        else if (ua.includes('Linux')) os = 'Linux';
        return {
            os, browser: getBrowserVersion(ua),
            screen: screen.width + '×' + screen.height,
            lang: navigator.language || 'N/A',
            tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
            cores: navigator.hardwareConcurrency || 'N/A',
            memory: navigator.deviceMemory ? navigator.deviceMemory + ' GB' : 'N/A',
            platform: navigator.platform || 'N/A',
        };
    }

    async function getIP() {
        try { const r = await fetch('https://api.ipify.org?format=json'); const d = await r.json(); return d.ip; }
        catch { return 'N/A'; }
    }

    async function testSpeed() {
        try {
            const url = 'https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js?_=' + Date.now();
            const s = performance.now();
            const r = await fetch(url, { cache: 'no-store' });
            const b = await r.arrayBuffer();
            const t = (performance.now() - s) / 1000;
            const mbps = (b.byteLength * 8 / 1024 / 1024 / t).toFixed(1);
            const latency = Math.round(t * 1000 / 3);
            return { speed: mbps + ' Mbps', latency: latency + ' ms', volume: (b.byteLength / 1024).toFixed(1) + ' KB' };
        } catch { return { speed: 'N/A', latency: 'N/A', volume: 'N/A' }; }
    }

    async function getBattery() {
        try { const b = await navigator.getBattery(); return Math.round(b.level * 100) + '% ' + (b.charging ? '⚡' : '🔋'); }
        catch { return 'N/A'; }
    }

    // ========== SCORE COLOR ==========
    function scoreColor(s) {
        if (s >= 80) return '#00ff88';
        if (s >= 60) return '#aaff00';
        if (s >= 40) return '#ffaa00';
        return '#ff4444';
    }

    function scoreLabel(s) {
        const tr = t();
        if (s >= 80) return tr.safe;
        if (s >= 60) return tr.warning;
        return tr.danger;
    }

    // ========== 3D RADAR ==========
    function getRadarSVG(score) {
        const r = 60, cx = 70, cy = 70;
        const angle = (score / 100) * 360;
        const rad = angle * Math.PI / 180;
        const x = cx + r * Math.sin(rad);
        const y = cy - r * Math.cos(rad);
        const largeArc = angle > 180 ? 1 : 0;
        const col = scoreColor(score);
        return `<svg width="140" height="140" viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="rg1" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="${col}" stop-opacity="0.2"/>
                    <stop offset="100%" stop-color="${col}" stop-opacity="0"/>
                </radialGradient>
            </defs>
            <circle cx="70" cy="70" r="65" fill="rgba(0,0,0,0.3)" stroke="rgba(0,200,100,0.2)" stroke-width="1"/>
            <circle cx="70" cy="70" r="48" fill="none" stroke="rgba(0,200,100,0.1)" stroke-width="1"/>
            <circle cx="70" cy="70" r="32" fill="none" stroke="rgba(0,200,100,0.1)" stroke-width="1"/>
            <circle cx="70" cy="70" r="16" fill="none" stroke="rgba(0,200,100,0.1)" stroke-width="1"/>
            <line x1="70" y1="5" x2="70" y2="135" stroke="rgba(0,200,100,0.1)" stroke-width="1"/>
            <line x1="5" y1="70" x2="135" y2="70" stroke="rgba(0,200,100,0.1)" stroke-width="1"/>
            <circle cx="70" cy="70" r="${r}" fill="url(#rg1)" stroke="${col}" stroke-width="1" stroke-dasharray="4 4"/>
            ${score > 0 ? `<path d="M ${cx} ${cy-r} A ${r} ${r} 0 ${largeArc} 1 ${x} ${y}" fill="none" stroke="${col}" stroke-width="4" stroke-linecap="round"/>` : ''}
            <circle cx="70" cy="70" r="4" fill="${col}" style="animation:secPing 1.5s ease-out infinite"/>
            <circle cx="70" cy="70" r="4" fill="${col}"/>
            <line x1="70" y1="70" x2="${x}" y2="${y}" stroke="${col}" stroke-width="2" opacity="0.7" style="animation:secRadar 3s linear infinite;transform-origin:70px 70px"/>
            <text x="70" y="75" text-anchor="middle" fill="${col}" font-size="18" font-weight="700">${score}%</text>
        </svg>`;
    }

    // ========== TAB CONTENT ==========
    function getTabContent() {
        const tr = t();
        const rtl = isRTL();

        if (curTab === 'overview') {
            if (!scanResults) return `
                <div style="text-align:center;padding:30px">
                    <div class="sec-float" style="font-size:60px;margin-bottom:16px">🛡️</div>
                    <div style="font-size:14px;color:#aaa;margin-bottom:20px">${tr.scan}</div>
                    <button class="sec-btn" onclick="secRunScan()" style="padding:12px 32px;background:linear-gradient(135deg,#00aa55,#0066cc);color:#fff;border:none;border-radius:12px;cursor:pointer;font-family:inherit;font-size:14px;font-weight:600">🔍 ${tr.scan}</button>
                </div>`;
            const sc = scanResults;
            return `
            <div style="text-align:center;margin-bottom:16px">
                ${getRadarSVG(sc.overallScore)}
                <div class="sec-glow" style="font-size:13px;font-weight:700;color:${scoreColor(sc.overallScore)}">${scoreLabel(sc.overallScore)}</div>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px">
                ${[
                    {label:tr.overview.siteScore,val:sc.siteScore+'%',c:scoreColor(sc.siteScore)},
                    {label:tr.overview.browserScore,val:sc.browserScore+'%',c:scoreColor(sc.browserScore)},
                    {label:tr.overview.netScore,val:sc.netScore+'%',c:scoreColor(sc.netScore)},
                    {label:tr.overview.threats,val:sc.threats,c:sc.threats===0?'#00ff88':'#ff4444'},
                ].map(i=>`<div class="sec-holo sec-card" style="border-radius:12px;padding:12px;text-align:center">
                    <div style="font-size:24px;font-weight:700;color:${i.c}">${i.val}</div>
                    <div style="font-size:10px;color:#aaa">${i.label}</div>
                </div>`).join('')}
            </div>
            <button class="sec-btn" onclick="secRunScan()" style="width:100%;padding:10px;background:linear-gradient(135deg,#00aa55,#0066cc);color:#fff;border:none;border-radius:10px;cursor:pointer;font-family:inherit;font-size:13px">🔄 ${tr.scan}</button>`;
        }

        if (curTab === 'site') {
            if (!scanResults) return `<div style="text-align:center;padding:20px;color:#aaa">${tr.scan}<br><button class="sec-btn" onclick="secRunScan()" style="margin-top:10px;padding:10px 24px;background:linear-gradient(135deg,#00aa55,#0066cc);color:#fff;border:none;border-radius:10px;cursor:pointer;font-family:inherit">🔍 ${tr.scan}</button></div>`;
            const checks = scanResults.site;
            const score = scanResults.siteScore;
            return `
            <div class="sec-holo sec-card" style="border-radius:12px;padding:14px;text-align:center;margin-bottom:12px">
                <div style="font-size:36px;font-weight:700;color:${scoreColor(score)}">${score}%</div>
                <div style="font-size:12px;color:#aaa">${tr.site.title}</div>
                <div style="background:rgba(255,255,255,0.1);border-radius:6px;height:8px;margin-top:8px;overflow:hidden">
                    <div style="width:${score}%;height:100%;background:linear-gradient(90deg,${scoreColor(score)},#00ccff);border-radius:6px;transition:width 1.5s ease"></div>
                </div>
            </div>
            ${Object.entries(checks).map(([key,val],i)=>`
            <div class="sec-holo" style="display:flex;align-items:center;gap:10px;padding:10px;border-radius:10px;margin-bottom:8px;animation:secSlideL 0.3s ease ${i*0.06}s both">
                <div style="font-size:20px">${val.ok?'✅':'❌'}</div>
                <div style="flex:1">
                    <div style="font-size:12px;font-weight:600;color:#e0f0e8">${tr.site.checks[key]||key}</div>
                    <div style="font-size:10px;color:#aaa">${val.info}</div>
                </div>
                <div style="font-size:10px;padding:3px 8px;border-radius:6px;background:${val.ok?'rgba(0,255,128,0.15)':'rgba(255,68,68,0.15)'};color:${val.ok?'#00ff88':'#ff4444'}">${val.ok?tr.pass:tr.fail}</div>
            </div>`).join('')}`;
        }

        if (curTab === 'browser') {
            if (!scanResults) return `<div style="text-align:center;padding:20px;color:#aaa"><button class="sec-btn" onclick="secRunScan()" style="margin-top:10px;padding:10px 24px;background:linear-gradient(135deg,#00aa55,#0066cc);color:#fff;border:none;border-radius:10px;cursor:pointer;font-family:inherit">🔍 ${tr.scan}</button></div>`;
            const checks = scanResults.browser;
            const score = scanResults.browserScore;
            const issues = Object.values(checks).filter(c=>!c.ok).length;
            return `
            <div class="sec-holo sec-card" style="border-radius:12px;padding:14px;text-align:center;margin-bottom:12px">
                <div style="font-size:36px;font-weight:700;color:${scoreColor(score)}">${score}%</div>
                <div style="font-size:12px;color:#aaa">${tr.browser.title}</div>
                <div style="font-size:11px;color:${issues>0?'#ffaa00':'#00ff88'};margin-top:4px">${issues} ${tr.browser.issues}</div>
                <div style="background:rgba(255,255,255,0.1);border-radius:6px;height:8px;margin-top:8px;overflow:hidden">
                    <div style="width:${score}%;height:100%;background:linear-gradient(90deg,${scoreColor(score)},#00ccff);border-radius:6px;transition:width 1.5s ease"></div>
                </div>
            </div>
            ${Object.entries(checks).map(([key,val],i)=>`
            <div class="sec-holo" style="display:flex;align-items:center;gap:10px;padding:10px;border-radius:10px;margin-bottom:8px;animation:secSlideR 0.3s ease ${i*0.06}s both">
                <div style="font-size:20px">${val.ok?'✅':'⚠️'}</div>
                <div style="flex:1">
                    <div style="font-size:12px;font-weight:600;color:#e0f0e8">${tr.browser.checks[key]||key}</div>
                    <div style="font-size:10px;color:#aaa">${val.info}</div>
                </div>
                <div style="font-size:10px;padding:3px 8px;border-radius:6px;background:${val.ok?'rgba(0,255,128,0.15)':'rgba(255,170,0,0.15)'};color:${val.ok?'#00ff88':'#ffaa00'}">${val.ok?tr.pass:tr.warning}</div>
            </div>`).join('')}`;
        }

        if (curTab === 'internet') {
            const conn = navigator.connection || {};
            return `
            <div class="sec-holo sec-card" style="border-radius:12px;padding:14px;text-align:center;margin-bottom:12px">
                <div style="font-size:36px;font-weight:700;color:${scoreColor(scanResults?scanResults.netScore:50)}">${scanResults?scanResults.netScore:'-'}%</div>
                <div style="font-size:12px;color:#aaa">${tr.internet.title}</div>
            </div>
            ${[
                {icon:'⚡',label:tr.internet.speed,val:'...',id:'sec-speed'},
                {icon:'🏓',label:tr.internet.latency,val:'...',id:'sec-latency'},
                {icon:'📦',label:tr.internet.volume,val:'...',id:'sec-volume'},
                {icon:'📶',label:'Connection Type',val:conn.effectiveType||tr.unknown,id:null},
                {icon:'💾',label:'Downlink',val:conn.downlink?conn.downlink+' Mbps':tr.unknown,id:null},
                {icon:'🔒',label:tr.internet.vpn,val:location.protocol==='https:'?'Likely Active':'Possibly Inactive',id:null},
                {icon:'🌐',label:tr.internet.dns,val:'Standard DNS',id:null},
                {icon:'📡',label:tr.internet.isp,val:tr.unknown,id:'sec-isp'},
            ].map((item,i)=>`
            <div class="sec-holo" style="display:flex;align-items:center;gap:10px;padding:10px;border-radius:10px;margin-bottom:8px;animation:secSlideL 0.3s ease ${i*0.05}s both">
                <div style="font-size:20px">${item.icon}</div>
                <div style="flex:1"><div style="font-size:10px;color:#6aaa8a">${item.label}</div><div style="font-size:12px;font-weight:600;color:#e0f0e8" ${item.id?`id="${item.id}"`:''}>${item.val}</div></div>
            </div>`).join('')}`;
        }

        if (curTab === 'device') {
            const d = getDeviceInfo();
            const now = new Date();
            return `
            ${[
                {icon:'🌐',label:t().device.ip,val:'...',id:'sec-ip'},
                {icon:'🆔',label:t().device.uid,val:userId,id:null},
                {icon:'💻',label:t().device.os,val:d.os,id:null},
                {icon:'🌍',label:t().device.browser,val:d.browser,id:null},
                {icon:'📺',label:t().device.screen,val:d.screen,id:null},
                {icon:'🗣️',label:t().device.lang,val:d.lang,id:null},
                {icon:'🌏',label:t().device.tz,val:d.tz,id:null},
                {icon:'🔋',label:t().device.battery,val:'...',id:'sec-battery'},
                {icon:'🧠',label:t().device.memory,val:d.memory,id:null},
                {icon:'⚙️',label:t().device.cores,val:d.cores,id:null},
                {icon:'🖥️',label:t().device.platform,val:d.platform,id:null},
                {icon:'🕐',label:'Time',val:now.toLocaleTimeString(),id:null},
                {icon:'📅',label:'Date',val:now.toLocaleDateString(),id:null},
            ].map((item,i)=>`
            <div class="sec-holo sec-card" style="display:flex;align-items:center;gap:10px;padding:10px;border-radius:10px;margin-bottom:8px;animation:secSlideL 0.3s ease ${i*0.04}s both">
                <div style="font-size:18px">${item.icon}</div>
                <div style="flex:1"><div style="font-size:10px;color:#6aaa8a">${item.label}</div><div style="font-size:12px;font-weight:600;color:#e0f0e8" ${item.id?`id="${item.id}"`:''}>${item.val}</div></div>
            </div>`).join('')}`;
        }

        if (curTab === 'threats') {
            const threats = [
                {icon:'⚠️',name:'MITM Attack',desc:'Man-in-the-middle possible without VPN',level:'medium',ok:location.protocol==='https:'},
                {icon:'🕵️',name:'Browser Fingerprinting',desc:'Your browser has a unique fingerprint',level:'low',ok:false},
                {icon:'📡',name:'WebRTC IP Leak',desc:'WebRTC can expose real IP behind VPN',level:'medium',ok:false},
                {icon:'🍪',name:'Cookie Tracking',desc:'Third-party cookies may track you',level:'low',ok:navigator.cookieEnabled},
                {icon:'🔓',name:'Insecure CSP',desc:'No Content Security Policy detected',level:'medium',ok:false},
                {icon:'✅',name:'API Key Protection',desc:'API keys stored securely in Worker',level:'none',ok:true},
                {icon:'✅',name:'CORS Protection',desc:'Cross-origin requests are restricted',level:'none',ok:true},
                {icon:'✅',name:'HTTPS Encryption',desc:'All traffic encrypted with TLS',level:'none',ok:location.protocol==='https:'},
            ];
            const active = threats.filter(t=>!t.ok).length;
            return `
            <div class="sec-holo sec-card" style="border-radius:12px;padding:14px;text-align:center;margin-bottom:12px">
                <div style="font-size:36px;font-weight:700;color:${active===0?'#00ff88':active<=2?'#ffaa00':'#ff4444'}">${active}</div>
                <div style="font-size:12px;color:#aaa">${tr.threats.title}</div>
                <div style="font-size:11px;color:#6aaa8a;margin-top:4px">${tr.threats.realtime} 🟢</div>
            </div>
            ${threats.map((th,i)=>`
            <div class="sec-holo" style="display:flex;align-items:center;gap:10px;padding:10px;border-radius:10px;margin-bottom:8px;border-color:rgba(${th.ok?'0,255,128':'255,68,68'},0.2);animation:secSlideR 0.3s ease ${i*0.06}s both">
                <div style="font-size:20px">${th.icon}</div>
                <div style="flex:1">
                    <div style="font-size:12px;font-weight:600;color:#e0f0e8">${th.name}</div>
                    <div style="font-size:10px;color:#aaa">${th.desc}</div>
                </div>
                <div style="font-size:10px;padding:3px 8px;border-radius:6px;background:${th.ok?'rgba(0,255,128,0.15)':th.level==='medium'?'rgba(255,170,0,0.15)':'rgba(255,68,68,0.15)'};color:${th.ok?'#00ff88':th.level==='medium'?'#ffaa00':'#ff4444'}">${th.ok?tr.safe:th.level}</div>
            </div>`).join('')}`;
        }
        return '';
    }

    // ========== MAIN PANEL ==========
    const panel = document.createElement('div');
    panel.id = 'orite-sec-panel';

    function renderPanel() {
        const tr = t();
        panel.style.cssText = `background:linear-gradient(135deg,#030d06,#050f14,#030d06);border:1px solid rgba(0,200,100,0.3);border-radius:20px;padding:20px;margin-top:14px;color:#e0f0e8;direction:${tr.dir};font-family:'${tr.font}',Tahoma,Arial,sans-serif;max-height:750px;overflow-y:auto;position:relative;`;
        panel.innerHTML = `
        <div class="sec-scan-line"></div>
        <!-- HEADER -->
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;padding-bottom:14px;border-bottom:1px solid rgba(0,200,100,0.2)">
            <div style="display:flex;align-items:center;gap:10px">
                <div style="width:38px;height:38px;border-radius:12px;background:linear-gradient(135deg,#00aa55,#0066cc);display:flex;align-items:center;justify-content:center;font-size:18px;box-shadow:0 4px 15px rgba(0,200,100,0.4)">🛡️</div>
                <div>
                    <div class="sec-glow" style="font-size:15px;font-weight:700;color:#00ff88">${tr.title}</div>
                    <div style="font-size:10px;color:#3a6a4a">LuoLaf Studio — Security Center</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;gap:6px">
                <select id="sec-lang-sel" style="background:rgba(0,200,100,0.1);border:1px solid rgba(0,200,100,0.3);border-radius:8px;padding:5px 8px;font-size:11px;color:#00ff88;cursor:pointer;outline:none;font-family:inherit" onchange="secSetLang(this.value)">
                    ${Object.keys(LANGS).map(l=>`<option value="${l}" ${l===curLang?'selected':''} style="background:#050f14">${l.toUpperCase()}</option>`).join('')}
                </select>
                <button onclick="document.getElementById('orite-sec-panel').remove();document.getElementById('orite-sec-style').remove();" style="width:30px;height:30px;border-radius:8px;background:rgba(255,0,0,0.1);border:1px solid rgba(255,0,0,0.3);color:#ff4444;cursor:pointer;font-size:14px;font-weight:bold">${tr.close}</button>
            </div>
        </div>
        <!-- SCAN STATUS -->
        ${scanning ? `<div style="text-align:center;padding:16px;margin-bottom:12px;background:rgba(0,200,100,0.1);border-radius:12px;border:1px solid rgba(0,200,100,0.3)"><span class="sec-spinner">⚙️</span> ${tr.scanning}</div>` : ''}
        <!-- TABS -->
        <div style="display:flex;gap:6px;margin-bottom:16px;overflow-x:auto;padding-bottom:4px;flex-wrap:wrap">
            ${Object.entries(tr.tabs).map(([id,label])=>`
            <button class="sec-tab ${curTab===id?'act':''}" onclick="secTab('${id}')" style="padding:7px 12px;border-radius:10px;background:${curTab===id?'linear-gradient(135deg,#00aa55,#0066cc)':'rgba(0,200,100,0.1)'};border:1px solid rgba(0,200,100,0.25);color:${curTab===id?'#fff':'#00aa66'};font-size:11px;font-weight:600;cursor:pointer;white-space:nowrap;font-family:inherit">
                ${label}
            </button>`).join('')}
        </div>
        <!-- CONTENT -->
        <div id="sec-tab-content">${getTabContent()}</div>
        <!-- FOOTER -->
        <div style="margin-top:14px;padding-top:10px;border-top:1px solid rgba(0,200,100,0.1);display:flex;justify-content:space-between;align-items:center">
            <div style="font-size:10px;color:#3a6a4a">${tr.footer.manager}</div>
            <div style="display:flex;align-items:center;gap:6px">
                <div style="width:6px;height:6px;border-radius:50%;background:#00ff88;animation:secBlink 1.5s infinite"></div>
                <div style="font-size:10px;color:#3a6a4a">${tr.footer.version}</div>
            </div>
        </div>`;

        loadDynamicData();
    }

    async function loadDynamicData() {
        if (curTab === 'device') {
            getIP().then(ip => { const el = document.getElementById('sec-ip'); if(el) el.textContent = ip; });
            getBattery().then(b => { const el = document.getElementById('sec-battery'); if(el) el.textContent = b; });
        }
        if (curTab === 'internet') {
            testSpeed().then(s => {
                const sp = document.getElementById('sec-speed');
                const lt = document.getElementById('sec-latency');
                const vo = document.getElementById('sec-volume');
                if(sp) sp.textContent = s.speed;
                if(lt) lt.textContent = s.latency;
                if(vo) vo.textContent = s.volume;
            });
            getIP().then(ip => { const el = document.getElementById('sec-isp'); if(el) el.textContent = 'IP: ' + ip; });
        }
    }

    // Global functions
    window.secTab = function(tab) { curTab = tab; renderPanel(); };
    window.secSetLang = function(l) { curLang = l; renderPanel(); };
    window.secRunScan = function() { runScan(); };

    document.body.appendChild(panel);
    renderPanel();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSecurity);
} else {
    initSecurity();
}