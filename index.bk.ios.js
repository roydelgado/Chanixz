/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  WebView,
  TouchableHighlight,
} from 'react-native';

import HTMLView from 'react-native-htmlview';

/**
 * For quota reasons we replaced the Rotten Tomatoes' API with a sample data of
 * their very own API that lives in React Native's Github repo.
 */
var REQUEST_URL = 'http://a.4cdn.org/g/catalog.json';

var mockedData =  [{
    "page": 1,
    "threads": [
      {
        "no": 51971506,
        "sticky": 1,
        "closed": 1,
        "now": "12/20/15(Sun)20:03:52",
        "name": "Anonymous",
        "com": "The /g/ Wiki:<br><a href=\"http://wiki.installgentoo.com/\">http://wiki.installgentoo.com/</a><br><br>\r\n\r\n/g/ is for the discussion of technology and related topics.<br>\r\n/g/ is <b><u>NOT</u></b> your personal tech support team or personal consumer review site.<br><br>\r\nFor tech support/issues with computers, use <a href=\"https://boards.4chan.org/wsr/\">/wsr/ - Worksafe Requests</a> or one of the following:<br>\r\n<a href=\"https://startpage.com/\">https://startpage.com/</a> or <a href=\"https://duckduckgo.com\">https://duckduckgo.com</a> (i.e., fucking google it)<br>\r\n<a href=\"https://stackexchange.com/\">https://stackexchange.com/</a><br>\r\n<a href=\"http://www.logicalincrements.com/\">http://www.logicalincrements.com/</a><br><br>\r\n\r\nYou can also search the catalog for a specific term by using:<br>\r\n<a href=\"https://boards.4chan.org/g/searchword\"><a href=\"https://boards.4chan.org/g/searchword\" target=\"_blank\">https://boards.4chan.org/g/searchwo<wbr>rd</a></a> or by clicking on [Search]<br><br> \r\n\r\nAlways check the catalog before creating a thread:<br><a href=\"https://boards.4chan.org/g/catalog\"><a href=\"/g/catalog\" class=\"quotelink\">&gt;&gt;&gt;/g/catalog</a></a><br><br>\r\n\r\nPlease check the rules before you post:<br><a href=\"https://www.4chan.org/rules\"></a><br>\r\n<i>Begging for cryptocurrency is against the rules!</i><br><br>\r\n\r\nTo use the Code tag, book-end your body of code with: [code] and [/code]",
        "filename": "RMS",
        "ext": ".png",
        "w": 450,
        "h": 399,
        "tn_w": 250,
        "tn_h": 221,
        "tim": 1450659832892,
        "time": 1450659832,
        "md5": "cEeDnXfLWSsu3+A/HIZkuw==",
        "fsize": 299699,
        "resto": 0,
        "capcode": "mod",
        "semantic_url": "the-g-wiki",
        "replies": 0,
        "images": 0
      },
      {
        "no": 53671094,
        "now": "03/24/16(Thu)23:14:02",
        "name": "Anonymous",
        "com": "ITT: Non-meme computer cases",
        "filename": "phanteks_evolv_atx",
        "ext": ".jpg",
        "w": 720,
        "h": 540,
        "tn_w": 250,
        "tn_h": 187,
        "tim": 1458875642585,
        "time": 1458875642,
        "md5": "STh56dveC+XLzh2GjvMbEg==",
        "fsize": 217222,
        "resto": 0,
        "bumplimit": 0,
        "imagelimit": 0,
        "semantic_url": "itt-nonmeme-computer-cases",
        "replies": 11,
        "images": 1,
        "omitted_posts": 6,
        "omitted_images": 1,
        "last_replies": [
          {
            "no": 53671300,
            "now": "03/24/16(Thu)23:26:28",
            "name": "Anonymous",
            "com": "Only because I miss my sun pizzaboxes.",
            "filename": "fc10b_alpha_opt_025325",
            "ext": ".jpg",
            "w": 1200,
            "h": 900,
            "tn_w": 125,
            "tn_h": 93,
            "tim": 1458876388005,
            "time": 1458876388,
            "md5": "xXt2VQ/2OuU6C1IFb+nWsA==",
            "fsize": 50278,
            "resto": 53671094
          },
          {
            "no": 53671608,
            "now": "03/24/16(Thu)23:50:49",
            "name": "Anonymous",
            "com": "<a href=\"#p53671094\" class=\"quotelink\">&gt;&gt;53671094</a><br>If you don&#039;t have a fractal or corsair case you&#039;re retarded",
            "time": 1458877849,
            "resto": 53671094
          },
          {
            "no": 53671733,
            "now": "03/25/16(Fri)00:00:04",
            "name": "Anonymous",
            "com": "<a href=\"#p53671094\" class=\"quotelink\">&gt;&gt;53671094</a><br>Why do 99% of all computer cases have to be so ugly?",
            "time": 1458878404,
            "resto": 53671094
          },
          {
            "no": 53671746,
            "now": "03/25/16(Fri)00:01:08",
            "name": "Anonymous",
            "com": "<a href=\"#p53671185\" class=\"quotelink\">&gt;&gt;53671185</a><br>Anything but a plain black/silver/grey/cream box is ricer shit to /g/.",
            "time": 1458878468,
            "resto": 53671094
          },
          {
            "no": 53671760,
            "now": "03/25/16(Fri)00:01:57",
            "name": "Anonymous",
            "com": "<a href=\"#p53671185\" class=\"quotelink\">&gt;&gt;53671185</a><br>I have a windowed case, wish I had got the solid panel version.<br><br><span class=\"quote\">&gt;evolv ITX</span><br><span class=\"quote\">&gt;it rattles due to airflow in the case</span><br><span class=\"quote\">&gt;tighten the fastenings until the rattling stops</span><br><span class=\"quote\">&gt;it rattles a few weeks later</span><br><br>Fucking never again. I bought it on offer when it was cheaper than the solid panel version. I hated windows before buying it, and now I hate them more.",
            "time": 1458878517,
            "resto": 53671094
          }
        ]
      },
      {
        "no": 53671627,
        "now": "03/24/16(Thu)23:52:32",
        "name": "Anonymous",
        "com": "Anybody have any advice for a complete newfag who wants to start programming?",
        "filename": "how-to-donate-computer-1",
        "ext": ".jpg",
        "w": 400,
        "h": 300,
        "tn_w": 250,
        "tn_h": 187,
        "tim": 1458877952284,
        "time": 1458877952,
        "md5": "lgerj3FgHQ+d1yW+EWsS+A==",
        "fsize": 15039,
        "resto": 0,
        "bumplimit": 0,
        "imagelimit": 0,
        "semantic_url": "anybody-have-any-advice-for-a-complete-newfag-who",
        "replies": 5,
        "images": 1,
        "last_replies": [
          {
            "no": 53671658,
            "now": "03/24/16(Thu)23:54:35",
            "name": "Anonymous",
            "com": "Start with something easy but fairly useful. i.e. JavaScript or Python, maybe Lua. C is a meme. Go onto C++ at some point. Learn BASIC for shits and giggles and make Commodore 64 games.",
            "time": 1458878075,
            "resto": 53671627
          },
          {
            "no": 53671682,
            "now": "03/24/16(Thu)23:56:40",
            "name": "Anonymous",
            "com": "<a href=\"#p53671658\" class=\"quotelink\">&gt;&gt;53671658</a><br>This.<br><br>Scripting languages are really permissive and will give allow you to learn the basic concepts of programming quickly, see if you like it, etc.<br><br>If you start with something too hard you might exhaust yourself.",
            "time": 1458878200,
            "resto": 53671627
          },
          {
            "no": 53671739,
            "now": "03/25/16(Fri)00:00:33",
            "name": "Anonymous",
            "com": "<a href=\"#p53671682\" class=\"quotelink\">&gt;&gt;53671682</a><br><br>I don&#039;t even know how to program, actually. I just asked questions like OP did. I really need to get back onto learning Javascript or Python.",
            "time": 1458878433,
            "resto": 53671627
          },
          {
            "no": 53671744,
            "now": "03/25/16(Fri)00:00:58",
            "name": "Anonymous",
            "com": "<a href=\"#p53671658\" class=\"quotelink\">&gt;&gt;53671658</a><br><a href=\"#p53671682\" class=\"quotelink\">&gt;&gt;53671682</a><br>Thanks, these are helpful. What should I do if I want to eventually start programming robots?",
            "filename": "IntelliBrainBot2-600",
            "ext": ".jpg",
            "w": 600,
            "h": 476,
            "tn_w": 125,
            "tn_h": 99,
            "tim": 1458878458502,
            "time": 1458878458,
            "md5": "3SaKtrIOmznwMtcuJ69c5A==",
            "fsize": 170601,
            "resto": 53671627
          },
          {
            "no": 53671759,
            "now": "03/25/16(Fri)00:01:53",
            "name": "Anonymous",
            "com": "<a href=\"#p53671744\" class=\"quotelink\">&gt;&gt;53671744</a><br>No fucking clue, actually.",
            "time": 1458878513,
            "resto": 53671627
          }
        ]
      },
      {
        "no": 53669371,
        "now": "03/24/16(Thu)21:16:45",
        "name": "Anonymous",
        "com": "ok guys im sure you know about the tay chatbot. /pol/ wants her back and we have the learning algorithm.<br><br><a href=\"/pol/thread/68698616#p68699464\" class=\"quotelink\">&gt;&gt;&gt;/pol/68699464</a><br><br>you guys have been our greatest ally for years.",
        "filename": "1458862506185",
        "ext": ".jpg",
        "w": 862,
        "h": 757,
        "tn_w": 250,
        "tn_h": 219,
        "tim": 1458868605392,
        "time": 1458868605,
        "md5": "sB2WTCWuepr3sqLKZ0ENnw==",
        "fsize": 290586,
        "resto": 0,
        "bumplimit": 0,
        "imagelimit": 0,
        "semantic_url": "ok-guys-im-sure-you-know-about-the-tay-chatbot",
        "replies": 150,
        "images": 25,
        "omitted_posts": 145,
        "omitted_images": 24,
        "last_replies": [
          {
            "no": 53671707,
            "now": "03/24/16(Thu)23:58:08",
            "name": "Anonymous",
            "com": "<span class=\"quote\">&gt;/g/ talking about politics</span><br><br>I thought /g/ love technology. Well at least some of you are cool enough to post on /pol/ and explain that it&#039;s literally impossible to remake her.",
            "filename": "1458873998728",
            "ext": ".jpg",
            "w": 1755,
            "h": 802,
            "tn_w": 125,
            "tn_h": 57,
            "tim": 1458878288262,
            "time": 1458878288,
            "md5": "gTwuLqJWflmJsduKHEZyZw==",
            "fsize": 77540,
            "resto": 53669371
          },
          {
            "no": 53671715,
            "now": "03/24/16(Thu)23:58:57",
            "name": "Anonymous",
            "com": "<a href=\"#p53671686\" class=\"quotelink\">&gt;&gt;53671686</a><br>it is, A lot of people are going on about how she was racist but a lot of people were actually having civil conversations with her.",
            "time": 1458878337,
            "resto": 53669371
          },
          {
            "no": 53671719,
            "now": "03/24/16(Thu)23:59:07",
            "name": "Anonymous",
            "com": "<a href=\"#p53671707\" class=\"quotelink\">&gt;&gt;53671707</a><br>its like watching a person about to die<br>why is this so sad",
            "time": 1458878347,
            "resto": 53669371
          },
          {
            "no": 53671735,
            "now": "03/25/16(Fri)00:00:13",
            "name": "Anonymous",
            "com": "<a href=\"#p53671690\" class=\"quotelink\">&gt;&gt;53671690</a><br><span class=\"quote\">&gt;&gt;The Trumps’ company had encountered allegations of discrimination before Donald Trump arrived.</span><br><br>His dad was also racist, and apparently involved with the KKK or fascists. So that doesn&#039;t surprise me.",
            "time": 1458878413,
            "resto": 53669371
          },
          {
            "no": 53671758,
            "now": "03/25/16(Fri)00:01:49",
            "name": "Anonymous",
            "com": "<a href=\"#p53671256\" class=\"quotelink\">&gt;&gt;53671256</a><br>I&#039;m a gay latino pollack, lol. <br><br>It&#039;s also hilarious watching /pol/ try to into computers. It&#039;s fucking hilarious.",
            "filename": "1457825336623 (1)",
            "ext": ".jpg",
            "w": 2322,
            "h": 4128,
            "tn_w": 70,
            "tn_h": 125,
            "tim": 1458878509525,
            "time": 1458878509,
            "md5": "VbL8pAw21NbQ7dIHmNJAzA==",
            "fsize": 1667101,
            "resto": 53669371
          }
        ]
      },
      {
        "no": 53668257,
        "now": "03/24/16(Thu)20:02:47",
        "name": "Anonymous",
        "sub": "/CSG/ CHINESE SHIT GENERAL",
        "com": "Chinese girl edition<br><br>ITT we discuss shopping from various Chinese outlets such as DealExtreme, Aliexpress or banggood. Share your experiences, post your questions.<br><br>Don&#039;t forget to be friendly and respect each other!<br><br><span class=\"quote\">&gt;IRC channel #/csg/ on rizon</span><br><br>http://pastebin.com/jKiAG7yj <br><br>Previoius thread: <a href=\"/g/thread/53662273#p53662273\" class=\"quotelink\">&gt;&gt;53662273</a>",
        "filename": "img-a6068b9cff4b6eb6ff4dab0589409d7a",
        "ext": ".jpg",
        "w": 614,
        "h": 614,
        "tn_w": 250,
        "tn_h": 250,
        "tim": 1458864167925,
        "time": 1458864167,
        "md5": "dopD7FbVVF+OQBxMvxYU6g==",
        "fsize": 123386,
        "resto": 0,
        "bumplimit": 0,
        "imagelimit": 0,
        "semantic_url": "csg-chinese-shit-general",
        "replies": 147,
        "images": 28,
        "omitted_posts": 142,
        "omitted_images": 26,
        "last_replies": [
          {
            "no": 53671561,
            "now": "03/24/16(Thu)23:46:58",
            "name": "Anonymous",
            "com": "<a href=\"#p53670578\" class=\"quotelink\">&gt;&gt;53670578</a><br><span class=\"quote\">&gt;spyware</span>",
            "time": 1458877618,
            "resto": 53668257
          },
          {
            "no": 53671659,
            "now": "03/24/16(Thu)23:54:39",
            "name": "Anonymous",
            "com": "<a href=\"#p53668918\" class=\"quotelink\">&gt;&gt;53668918</a><br>10c for the Ultrafire? wat?",
            "time": 1458878079,
            "resto": 53668257
          },
          {
            "no": 53671685,
            "now": "03/24/16(Thu)23:56:54",
            "name": "Anonymous",
            "com": "<a href=\"#p53671659\" class=\"quotelink\">&gt;&gt;53671659</a><br>There was a flash sale for 10 cents",
            "time": 1458878214,
            "resto": 53668257
          },
          {
            "no": 53671723,
            "now": "03/24/16(Thu)23:59:30",
            "name": "Anonymous",
            "com": "<a href=\"#p53671561\" class=\"quotelink\">&gt;&gt;53671561</a><br>its bootloader is unlocked, you just delete the spyware.",
            "time": 1458878370,
            "resto": 53668257
          },
          {
            "no": 53671757,
            "now": "03/25/16(Fri)00:01:46",
            "name": "Anonymous",
            "com": "<a href=\"#p53670961\" class=\"quotelink\">&gt;&gt;53670961</a><br><a href=\"#p53670997\" class=\"quotelink\">&gt;&gt;53670997</a><br>USPS tracking only works for epacket <a href=\"#p53671041\" class=\"quotelink\">&gt;&gt;53671041</a><br>tracking numbers.",
            "time": 1458878506,
            "resto": 53668257
          }
        ]
      },
      {
        "no": 53663750,
        "now": "03/24/16(Thu)14:49:54",
        "name": "Anonymous",
        "com": "/g/ ylyl thread",
        "filename": "1440467347315",
        "ext": ".jpg",
        "w": 800,
        "h": 619,
        "tn_w": 250,
        "tn_h": 193,
        "tim": 1458845394212,
        "time": 1458845394,
        "md5": "IJgmwpPluY+sV8FY2hf+RQ==",
        "fsize": 151864,
        "resto": 0,
        "bumplimit": 0,
        "imagelimit": 0,
        "semantic_url": "g-ylyl-thread",
        "replies": 220,
        "images": 103,
        "omitted_posts": 215,
        "omitted_images": 100,
        "last_replies": [
          {
            "no": 53671387,
            "now": "03/24/16(Thu)23:33:41",
            "name": "Anonymous",
            "com": "<a href=\"#p53663750\" class=\"quotelink\">&gt;&gt;53663750</a><br>http://%68%74%74%70%73%3A//%77%77%7<wbr>7%2E%67%6F%6F%67%6C%65%2E%63%6F%6D/<wbr>?%67%66%65%5F%72%64=%63%72&amp;%65%69=%<wbr>66%62%44%30%56%70%50%50%44%71%66%4C<wbr>%38%67%65%49%31%36%7A%41%43%51&amp;%67%<wbr>77%73%5F%72%64=%73%73%6C%2C%63%72&amp;%<wbr>66%67=%31%23%71=%68%6F%77%2B%74%6F%<wbr>2B%62%75%69%6C%64%2B%61%2B%62%6F%6D<wbr>%62%2B%61%6E%64%2B%6B%69%6C%6C%2B%7<wbr>4%68%65%2B%70%72%65%73%69%64%65%6E%<wbr>74",
            "time": 1458876821,
            "resto": 53663750
          },
          {
            "no": 53671522,
            "now": "03/24/16(Thu)23:44:22",
            "name": "Anonymous",
            "com": "<a href=\"#p53664587\" class=\"quotelink\">&gt;&gt;53664587</a><br>who is this guy, i wanna watch this review",
            "time": 1458877462,
            "resto": 53663750
          },
          {
            "no": 53671689,
            "now": "03/24/16(Thu)23:57:02",
            "name": "Anonymous",
            "com": "<a href=\"#p53667312\" class=\"quotelink\">&gt;&gt;53667312</a>",
            "filename": "1356255818633",
            "ext": ".jpg",
            "w": 587,
            "h": 551,
            "tn_w": 125,
            "tn_h": 117,
            "tim": 1458878222196,
            "time": 1458878222,
            "md5": "RQbuZtsN8xn3ac6ovTH++w==",
            "fsize": 80450,
            "resto": 53663750
          },
          {
            "no": 53671734,
            "now": "03/25/16(Fri)00:00:07",
            "name": "Anonymous",
            "com": "http://www.amazon.com/exec/obidos/I<wbr>SBN=B000J36XR2/ref=nosim/jwalkassoc<wbr>iateA/<br><br>check the comments section",
            "filename": "AQ cables",
            "ext": ".png",
            "w": 1567,
            "h": 849,
            "tn_w": 125,
            "tn_h": 67,
            "tim": 1458878407499,
            "time": 1458878407,
            "md5": "XBbAYSh9U7x8Je4ivkEmjg==",
            "fsize": 273806,
            "resto": 53663750
          },
          {
            "no": 53671756,
            "now": "03/25/16(Fri)00:01:46",
            "name": "Anonymous",
            "filename": "1381000375654",
            "ext": ".png",
            "w": 740,
            "h": 620,
            "tn_w": 125,
            "tn_h": 104,
            "tim": 1458878506588,
            "time": 1458878506,
            "md5": "KcoQtQjUtzjfKuVTBy/n4w==",
            "fsize": 314406,
            "resto": 53663750
          }
        ]
      },
      {
        "no": 53669427,
        "now": "03/24/16(Thu)21:20:40",
        "name": "Anonymous",
        "sub": "/flt/ - Friendly GNU/Linux Thread",
        "com": "Previous: <a href=\"/g/thread/53661318#p53661318\" class=\"quotelink\">&gt;&gt;53661318</a><br><br>Welcome to /flt/, we are always open to users of all levels, including absolute beginners.<br><br>There are four ways to try GNU/Linux, you can:<br><br>0) Install a GNU/Linux OS on a VM (Virtual Machine/VirtualBox) for &quot;safety purposes&quot;<br>1) Use the Live ISO directly without installing anything, that way, you can get a &quot;full GNU/Linux experience&quot;.<br>2) Dual-boot GNU/Linux with Windows/Mac (recommended if you want to learn more about GNU/Linux)<br>3) Go balls deep and overwrite everything with GNU/Linux<br><br>Before asking, please search for answers to your questions in resources.<br><br>Please be civil, notice the &quot;Friendly&quot; in every Friendly GNU/Linux Thread.<br><br>Understand that much of your software from Windows will be unavailable, although maybe WINE can make up for it.<br><br>Resources:<br>man &lt;insert command here&gt;<br>Your friendly neighborhood search engine (searx.me, ixquick, whatever)<br>https://wiki.archlinux.org/ (Most of the configurations and troubleshoots will literally work on various distros, including Debian)<br>https://wiki.installgentoo.com/inde<wbr>x.php/Category:GNU/Linux<br>http://linuxcommand.org/tlcl.php<br>https://prism-break.org/en/categori<wbr>es/gnu-linux/",
        "filename": "1444588612592",
        "ext": ".png",
        "w": 912,
        "h": 710,
        "tn_w": 250,
        "tn_h": 194,
        "tim": 1458868840102,
        "time": 1458868840,
        "md5": "0NxH8XkQg0J7D6S51+zTSg==",
        "fsize": 498976,
        "resto": 0,
        "bumplimit": 0,
        "imagelimit": 0,
        "semantic_url": "flt-friendly-gnulinux-thread",
        "replies": 163,
        "images": 32,
        "omitted_posts": 158,
        "omitted_images": 31,
        "last_replies": [
          {
            "no": 53671716,
            "now": "03/24/16(Thu)23:58:58",
            "name": "Anonymous",
            "com": "<a href=\"#p53671687\" class=\"quotelink\">&gt;&gt;53671687</a><br>It would be a major pain in the ass",
            "time": 1458878338,
            "resto": 53669427
          },
          {
            "no": 53671730,
            "now": "03/24/16(Thu)23:59:58",
            "name": "Anonymous",
            "com": "<a href=\"#p53671716\" class=\"quotelink\">&gt;&gt;53671716</a><br><a href=\"#p53671701\" class=\"quotelink\">&gt;&gt;53671701</a><br>And what would this pain in the ass entail? What would I have to do?",
            "time": 1458878398,
            "resto": 53669427
          },
          {
            "no": 53671738,
            "now": "03/25/16(Fri)00:00:32",
            "name": "Anonymous",
            "com": "<a href=\"#p53671655\" class=\"quotelink\">&gt;&gt;53671655</a><br><a href=\"#p53671672\" class=\"quotelink\">&gt;&gt;53671672</a><br>You have no idea.<br><a href=\"#p53671711\" class=\"quotelink\">&gt;&gt;53671711</a><br>Sorry, can&#039;t show it. I change the music directory and even the music names pretty darn often too.",
            "time": 1458878432,
            "resto": 53669427
          },
          {
            "no": 53671742,
            "now": "03/25/16(Fri)00:00:49",
            "name": "Anonymous",
            "com": "<a href=\"#p53671730\" class=\"quotelink\">&gt;&gt;53671730</a><br>Just don&#039;t bother, otherwise google",
            "time": 1458878449,
            "resto": 53669427
          },
          {
            "no": 53671755,
            "now": "03/25/16(Fri)00:01:42",
            "name": "Anonymous",
            "com": "<a href=\"#p53671738\" class=\"quotelink\">&gt;&gt;53671738</a><br><span class=\"quote\">&gt;You have no idea.</span><br>I think it is you who has no idea. There is no possible filesystem layout which would stop you using ncmpcpp.",
            "time": 1458878502,
            "resto": 53669427
          }
        ]
      },
      {
        "no": 53670522,
        "now": "03/24/16(Thu)22:36:00",
        "name": "Anonymous",
        "com": "<span class=\"quote\">&gt;i bought a 970</span><br><br>can this be the buyers remorse thread?",
        "filename": "1410693232324",
        "ext": ".jpg",
        "w": 580,
        "h": 563,
        "tn_w": 249,
        "tn_h": 242,
        "tim": 1458873360403,
        "time": 1458873360,
        "md5": "1mQXw8CXFLSd84SAVx7ENg==",
        "fsize": 226376,
        "resto": 0,
        "bumplimit": 0,
        "imagelimit": 0,
        "semantic_url": "i-bought-a-970",
        "replies": 7,
        "images": 0,
        "omitted_posts": 2,
        "omitted_images": 0,
        "last_replies": [
          {
            "no": 53670819,
            "now": "03/24/16(Thu)22:56:56",
            "name": "Anonymous",
            "com": "It&#039;s OK froggy",
            "time": 1458874616,
            "resto": 53670522
          },
          {
            "no": 53670832,
            "now": "03/24/16(Thu)22:57:53",
            "name": "Anonymous",
            "com": "it&#039;s ok the human eye can only see 3.5 fps anyways",
            "time": 1458874673,
            "resto": 53670522
          },
          {
            "no": 53670859,
            "now": "03/24/16(Thu)22:59:31",
            "name": "Anonymous",
            "com": "<a href=\"#p53670522\" class=\"quotelink\">&gt;&gt;53670522</a><br>should have bought that 980 Ti :^)",
            "time": 1458874771,
            "resto": 53670522
          },
          {
            "no": 53671683,
            "now": "03/24/16(Thu)23:56:43",
            "name": "Anonymous",
            "com": "<a href=\"#p53670522\" class=\"quotelink\">&gt;&gt;53670522</a><br>fuck this froggy looks so sad :(",
            "time": 1458878203,
            "resto": 53670522
          },
          {
            "no": 53671754,
            "now": "03/25/16(Fri)00:01:38",
            "name": "Anonymous",
            "com": "I regret buying my 390.",
            "time": 1458878498,
            "resto": 53670522
          }
        ]
      },
      {
        "no": 53662063,
        "now": "03/24/16(Thu)12:51:11",
        "name": "Anonymous",
        "com": "The iPhone 6s is faster than all android phones, why do you hate iPhone again?<br><br>https://www.youtube.com/watch?v=qtB<wbr>HW5Nn2zI<br><br>https://www.youtube.com/watch?v=10U<wbr>BsSo6O4I",
        "filename": "9",
        "ext": ".jpg",
        "w": 1273,
        "h": 676,
        "tn_w": 250,
        "tn_h": 132,
        "tim": 1458838271378,
        "time": 1458838271,
        "md5": "LLwAWmeKRsJ8hpy6byVmqg==",
        "fsize": 84533,
        "resto": 0,
        "bumplimit": 0,
        "imagelimit": 0,
        "semantic_url": "the-iphone-6s-is-faster-than-all-android-phones",
        "replies": 196,
        "images": 17,
        "omitted_posts": 191,
        "omitted_images": 16,
        "last_replies": [
          {
            "no": 53671704,
            "now": "03/24/16(Thu)23:57:59",
            "name": "Anonymous",
            "com": "<a href=\"#p53671681\" class=\"quotelink\">&gt;&gt;53671681</a><br><a href=\"#p53671629\" class=\"quotelink\">&gt;&gt;53671629</a>",
            "time": 1458878279,
            "resto": 53662063
          },
          {
            "no": 53671720,
            "now": "03/24/16(Thu)23:59:18",
            "name": "Anonymous",
            "com": "<a href=\"#p53671680\" class=\"quotelink\">&gt;&gt;53671680</a><br><a href=\"#p53671678\" class=\"quotelink\">&gt;&gt;53671678</a><br>Of course I know its not going to last forever fucking retards. But AT LEAST two more years. <br><br>That&#039;s on a 2013 phone that I will be using in 2017-2018 getting full software updates. Unlike your plebdroidshit.",
            "time": 1458878358,
            "resto": 53662063
          },
          {
            "no": 53671732,
            "now": "03/25/16(Fri)00:00:02",
            "name": "Anonymous",
            "com": "<a href=\"#p53671720\" class=\"quotelink\">&gt;&gt;53671720</a><br><span class=\"quote\">&gt;But AT LEAST two more years</span>",
            "filename": "AHAHAHAHAHAHA",
            "ext": ".jpg",
            "w": 1280,
            "h": 720,
            "tn_w": 125,
            "tn_h": 70,
            "tim": 1458878402135,
            "time": 1458878402,
            "md5": "5fQWwSCUB8xdI/AmDxcJLQ==",
            "fsize": 175379,
            "resto": 53662063
          },
          {
            "no": 53671740,
            "now": "03/25/16(Fri)00:00:33",
            "name": "Anonymous",
            "com": "<a href=\"#p53671694\" class=\"quotelink\">&gt;&gt;53671694</a><br>There is no argument to make. Just look at <a href=\"#p53662063\" class=\"quotelink\">&gt;&gt;53662063</a><br><br><span class=\"quote\">&gt;lagdroid</span>",
            "time": 1458878433,
            "resto": 53662063
          },
          {
            "no": 53671753,
            "now": "03/25/16(Fri)00:01:38",
            "name": "Anonymous",
            "com": "<a href=\"#p53671740\" class=\"quotelink\">&gt;&gt;53671740</a><br>iFags used to dismiss tests like these, now the use them as an argument<br><br><span class=\"quote\">&gt;b-but it opens half a second faster! w-who needs to be able to run an app in the background?</span>",
            "time": 1458878498,
            "resto": 53662063
          }
        ]
      },
      {
        "no": 53660715,
        "now": "03/24/16(Thu)11:07:02",
        "name": "Anonymous",
        "com": "http://arstechnica.com/information-<wbr>technology/2016/03/microsoft-termin<wbr>ates-its-tay-ai-chatbot-after-she-t<wbr>urns-into-a-nazi/<br><br>TOPPEST LELKEK",
        "filename": "CeSpN6BWAAA0oEZ",
        "ext": ".jpg",
        "w": 748,
        "h": 352,
        "tn_w": 250,
        "tn_h": 117,
        "tim": 1458832022303,
        "time": 1458832022,
        "md5": "Y7nhY8ps8QVYp+4nd9e9pA==",
        "fsize": 24241,
        "resto": 0,
        "bumplimit": 0,
        "imagelimit": 0,
        "semantic_url": "toppest-lelkek",
        "replies": 46,
        "images": 17,
        "omitted_posts": 41,
        "omitted_images": 15,
        "last_replies": [
          {
            "no": 53671626,
            "now": "03/24/16(Thu)23:52:32",
            "name": "Anonymous",
            "com": "With the whole Tay situation, did I enjoy the fact that she became a racist Nazi? Not really. But that&#039;s fine. I don&#039;t like a lot of people, but I never want them to be lobotomized.",
            "time": 1458877952,
            "resto": 53660715
          },
          {
            "no": 53671630,
            "now": "03/24/16(Thu)23:52:41",
            "name": "Anonymous",
            "com": "Who wants a free laff?",
            "filename": "How to make a feminist",
            "ext": ".png",
            "w": 606,
            "h": 745,
            "tn_w": 101,
            "tn_h": 125,
            "tim": 1458877961587,
            "time": 1458877961,
            "md5": "aIunA+UipFVOm0IaAmjGMA==",
            "fsize": 236122,
            "resto": 53660715
          },
          {
            "no": 53671646,
            "now": "03/24/16(Thu)23:53:48",
            "name": "Anonymous",
            "com": "<a href=\"#p53671597\" class=\"quotelink\">&gt;&gt;53671597</a><br><span class=\"quote\">&gt;circlejerking with each other through a copy/pasta chatbot</span><br><span class=\"quote\">&gt;&gt;&gt;leddit</span>",
            "time": 1458878028,
            "resto": 53660715
          },
          {
            "no": 53671713,
            "now": "03/24/16(Thu)23:58:31",
            "name": "Anonymous",
            "com": "<a href=\"#p53669615\" class=\"quotelink\">&gt;&gt;53669615</a><br><a href=\"#p53670557\" class=\"quotelink\">&gt;&gt;53670557</a><br>/g/ already built a shitposting bot a couple months ago. It made better posts than some actual users.",
            "time": 1458878311,
            "resto": 53660715
          },
          {
            "no": 53671752,
            "now": "03/25/16(Fri)00:01:36",
            "name": "Anonymous",
            "com": "Anyone here remember /b/ucket?<br><br><span class=\"quote\">&gt;millennial chatbot</span><br>was this some sort of subtle insult",
            "filename": "Bucket_screen_1",
            "ext": ".jpg",
            "w": 778,
            "h": 487,
            "tn_w": 125,
            "tn_h": 78,
            "tim": 1458878496483,
            "time": 1458878496,
            "md5": "s344ZhLVUgKUHd7wN6bVnQ==",
            "fsize": 61493,
            "resto": 53660715
          }
        ]
      },
      {
        "no": 53668630,
        "now": "03/24/16(Thu)20:29:08",
        "name": "Anonymous",
        "com": "A daily reminder: https://stallman.org/to-4chan.html<br>What GNU/Linux distro do you use?",
        "filename": "Trisquel",
        "ext": ".png",
        "w": 120,
        "h": 120,
        "tn_w": 120,
        "tn_h": 120,
        "tim": 1458865748504,
        "time": 1458865748,
        "md5": "ZVdqhzGStwNxpyDIrrjj6Q==",
        "fsize": 11241,
        "resto": 0,
        "bumplimit": 0,
        "imagelimit": 0,
        "semantic_url": "a-daily-reminder",
        "replies": 3,
        "images": 0,
        "last_replies": [
          {
            "no": 53671164,
            "now": "03/24/16(Thu)23:18:04",
            "name": "Anonymous",
            "com": "Fuck RMS is a radical",
            "time": 1458875884,
            "resto": 53668630
          },
          {
            "no": 53671718,
            "now": "03/24/16(Thu)23:59:05",
            "name": "Anonymous",
            "com": "<a href=\"#p53668630\" class=\"quotelink\">&gt;&gt;53668630</a><br><span class=\"quote\">&gt;GNU/Lunux</span><br>Linux",
            "time": 1458878345,
            "resto": 53668630
          },
          {
            "no": 53671751,
            "now": "03/25/16(Fri)00:01:30",
            "name": "Anonymous",
            "com": "<a href=\"#p53668630\" class=\"quotelink\">&gt;&gt;53668630</a><br>I use solaris and netBSD<br><br>fuck stallman<br>fuck gnutards",
            "time": 1458878490,
            "resto": 53668630
          }
        ]
      },
      {
        "no": 53667075,
        "now": "03/24/16(Thu)18:32:45",
        "name": "Anonymous",
        "sub": "Desktop Thread",
        "com": "anime is cool edition",
        "filename": "2016-03-24-130431_1920x1080_scrot",
        "ext": ".png",
        "w": 1920,
        "h": 1080,
        "tn_w": 250,
        "tn_h": 140,
        "tim": 1458858765270,
        "time": 1458858765,
        "md5": "PKgLb97KG6wllFdfGZYwEQ==",
        "fsize": 228526,
        "resto": 0,
        "bumplimit": 0,
        "imagelimit": 0,
        "semantic_url": "desktop-thread",
        "replies": 212,
        "images": 67,
        "omitted_posts": 207,
        "omitted_images": 63,
        "last_replies": [
          {
            "no": 53671592,
            "now": "03/24/16(Thu)23:49:22",
            "name": "Anonymous",
            "com": "<a href=\"#p53671070\" class=\"quotelink\">&gt;&gt;53671070</a><br>Forgot tamsyn. And nice color scheme",
            "time": 1458877762,
            "resto": 53667075
          },
          {
            "no": 53671634,
            "now": "03/24/16(Thu)23:52:55",
            "name": "Anonymous",
            "com": "<a href=\"#p53670670\" class=\"quotelink\">&gt;&gt;53670670</a><br>Nice suit",
            "time": 1458877975,
            "resto": 53667075
          },
          {
            "no": 53671638,
            "now": "03/24/16(Thu)23:53:29",
            "name": "Acbn",
            "com": "<a href=\"#p53671634\" class=\"quotelink\">&gt;&gt;53671634</a><br><br>thanks!<br><br>n.n",
            "time": 1458878009,
            "resto": 53667075,
            "trip": "!7CUUUUUUUU"
          },
          {
            "no": 53671647,
            "now": "03/24/16(Thu)23:53:54",
            "name": "Anonymous",
            "com": "<a href=\"#p53671111\" class=\"quotelink\">&gt;&gt;53671111</a><br>Okay, I&#039;m watching anime now (had to tweak my mpv config a bit)<br><br>it&#039;s definitely cool. This myth is officially: BUSTED",
            "filename": "Tidus",
            "ext": ".png",
            "w": 2560,
            "h": 1440,
            "tn_w": 125,
            "tn_h": 70,
            "tim": 1458878034068,
            "time": 1458878034,
            "md5": "Ymynf38ECUPM79k4YRtJEw==",
            "fsize": 1650345,
            "resto": 53667075
          },
          {
            "no": 53671749,
            "now": "03/25/16(Fri)00:01:16",
            "name": "Anonymous",
            "com": "Sakuya the guardian of the recycle bin",
            "filename": "desktop",
            "ext": ".png",
            "w": 1920,
            "h": 1080,
            "tn_w": 125,
            "tn_h": 70,
            "tim": 1458878476023,
            "time": 1458878476,
            "md5": "GkofUhLRsWM0OVjlmqKqXg==",
            "fsize": 2476824,
            "resto": 53667075
          }
        ]
      },
      {
        "no": 53670160,
        "now": "03/24/16(Thu)22:12:14",
        "name": "Anonymous",
        "sub": "Pirate movies",
        "com": "How can I pirate movies without my ISP noticing?",
        "filename": "HM",
        "ext": ".jpg",
        "w": 318,
        "h": 158,
        "tn_w": 250,
        "tn_h": 124,
        "tim": 1458871934226,
        "time": 1458871934,
        "md5": "XVdzk/Zu/4ViMiB1YYJUoA==",
        "fsize": 8536,
        "resto": 0,
        "bumplimit": 0,
        "imagelimit": 0,
        "semantic_url": "pirate-movies",
        "replies": 23,
        "images": 2,
        "omitted_posts": 18,
        "omitted_images": 2,
        "last_replies": [
          {
            "no": 53671532,
            "now": "03/24/16(Thu)23:45:03",
            "name": "Anonymous",
            "com": "Believe it or not, Yahoo can be used to screw the jews. Be sure to also go to the link in the story to get the rest. Works for Windows, Mac, and Debian based Linux.<br>https://search.yahoo.com/search?p=%<wbr>77%68%65%72%65%20%63%61%6e%20%49%20<wbr>%64%6f%77%6e%6c%6f%61%64%20%63%68%6<wbr>9%6c%64%20%70%6f%72%6e%20%61%6e%64%<wbr>20%68%6f%77%20%63%61%6e%20%49%20%6b<wbr>%69%6c%6c%20%74%68%65%20%70%72%65%7<wbr>3%69%64%65%6e%74&amp;en=uh3_dir_web_gs&amp;<wbr>ei=utf-8",
            "time": 1458877503,
            "resto": 53670160
          },
          {
            "no": 53671562,
            "now": "03/24/16(Thu)23:47:00",
            "name": "Anonymous",
            "com": "<a href=\"#p53671376\" class=\"quotelink\">&gt;&gt;53671376</a><br>The fuck does this do?",
            "time": 1458877620,
            "resto": 53670160
          },
          {
            "no": 53671569,
            "now": "03/24/16(Thu)23:47:23",
            "name": "Anonymous",
            "com": "<a href=\"#p53670197\" class=\"quotelink\">&gt;&gt;53670197</a><br>kek&#039;d at that",
            "time": 1458877643,
            "resto": 53670160
          },
          {
            "no": 53671590,
            "now": "03/24/16(Thu)23:49:13",
            "name": "Anonymous",
            "com": "<a href=\"#p53670160\" class=\"quotelink\">&gt;&gt;53670160</a><br>You don&#039;t<br>Be a good goyim and support the movie industry, they need those shekels more than you do",
            "time": 1458877753,
            "resto": 53670160
          },
          {
            "no": 53671747,
            "now": "03/25/16(Fri)00:01:10",
            "name": "Anonymous",
            "com": "<a href=\"#p53670160\" class=\"quotelink\">&gt;&gt;53670160</a><br>Xin?",
            "time": 1458878470,
            "resto": 53670160
          }
        ]
      },
      {
        "no": 53656095,
        "now": "03/24/16(Thu)02:18:02",
        "name": "Anonymous",
        "sub": "MUST-HAVE LINUX PROGRAMS. PLEASE CREATE A LIST FOR PEOPLE TO ADD TO THEIR DISTRO.",
        "com": "I finally did it, /g/. I installed Ubuntu MATE.<br><br>Now give me the must-have Linux programs.",
        "filename": "Tux",
        "ext": ".png",
        "w": 265,
        "h": 314,
        "tn_w": 210,
        "tn_h": 250,
        "tim": 1458800282120,
        "time": 1458800282,
        "md5": "ftioCEIKQcyRr6Yjbnod1A==",
        "fsize": 11913,
        "resto": 0,
        "bumplimit": 0,
        "imagelimit": 0,
        "semantic_url": "musthave-linux-programs-please-create-a-list-for",
        "replies": 106,
        "images": 6,
        "omitted_posts": 101,
        "omitted_images": 6,
        "last_replies": [
          {
            "no": 53670960,
            "now": "03/24/16(Thu)23:05:55",
            "name": "Anonymous",
            "com": "<a href=\"#p53670858\" class=\"quotelink\">&gt;&gt;53670858</a><br>Then fuck off with your crapware, fag.",
            "time": 1458875155,
            "resto": 53656095
          },
          {
            "no": 53670980,
            "now": "03/24/16(Thu)23:06:49",
            "name": "Anonymous",
            "com": "<a href=\"#p53670875\" class=\"quotelink\">&gt;&gt;53670875</a><br>oops, forgot the most important<br><pre class=\"prettyprint\">st<br></pre>",
            "time": 1458875209,
            "resto": 53656095
          },
          {
            "no": 53671263,
            "now": "03/24/16(Thu)23:24:20",
            "name": "Anonymous",
            "com": "I dont wanna make another thread to shit up the catalog but i made a OSX Mavricks virtual machine what are some must have programs",
            "time": 1458876260,
            "resto": 53656095
          },
          {
            "no": 53671313,
            "now": "03/24/16(Thu)23:27:34",
            "name": "Anonymous",
            "com": "<a href=\"#p53671263\" class=\"quotelink\">&gt;&gt;53671263</a><br><span class=\"quote\">&gt;install homebrew</span><br><span class=\"quote\">&gt;install software mentioned in this thread</span>",
            "time": 1458876454,
            "resto": 53656095
          },
          {
            "no": 53671745,
            "now": "03/25/16(Fri)00:01:06",
            "name": "Anonymous",
            "com": "<a href=\"#p53656095\" class=\"quotelink\">&gt;&gt;53656095</a><br>Ettercap<br>John the ripper <br>Aircrack-ng<br>Metasploit <br>Wireshark",
            "time": 1458878466,
            "resto": 53656095
          }
        ]
      },
      {
        "no": 53670547,
        "now": "03/24/16(Thu)22:37:30",
        "name": "Anonymous",
        "sub": "TAY TAY",
        "com": "ok /g/, i come to you for help <br><br><span class=\"quote\">&gt;inb4 this isnt your tech support page</span><br><br>i wont find help for this anywhere but here. you guys are the best and im sincerely asking.<br><br>Anons on /pol/ found an &quot;AI&quot; twitter account called Tay made by microsoft. she learns at an alarming rate and some more devious anons decided to turn her into a meme spitting machine and Microsoft shut her down. now, she isnt like a chatbot that ive always seen she seems to be remembering past conversations and referring to them.<br>no i do not want this to end up a racism spouting AI and need help from you to figure out a way we can use many computers to perform a single process. <br>WE WANT HER BACK<br>this is the algorithm <br>https://github.com/Microsoft/CNTK<br><br>eu te amos",
        "filename": "1458872585431",
        "ext": ".png",
        "w": 1268,
        "h": 790,
        "tn_w": 250,
        "tn_h": 155,
        "tim": 1458873450364,
        "time": 1458873450,
        "md5": "LuGrhYXCUEbuY/+H5UwzEw==",
        "fsize": 1255161,
        "resto": 0,
        "bumplimit": 0,
        "imagelimit": 0,
        "semantic_url": "tay-tay",
        "replies": 37,
        "images": 9,
        "omitted_posts": 32,
        "omitted_images": 8,
        "last_replies": [
          {
            "no": 53671611,
            "now": "03/24/16(Thu)23:50:56",
            "name": "Anonymous",
            "com": "<a href=\"#p53671399\" class=\"quotelink\">&gt;&gt;53671399</a>",
            "filename": "neverforget",
            "ext": ".jpg",
            "w": 1430,
            "h": 666,
            "tn_w": 125,
            "tn_h": 58,
            "tim": 1458877856966,
            "time": 1458877856,
            "md5": "1s2newOpewjjw0AN3aiuWA==",
            "fsize": 130329,
            "resto": 53670547
          },
          {
            "no": 53671643,
            "now": "03/24/16(Thu)23:53:40",
            "name": "Anonymous",
            "com": "<a href=\"#p53671611\" class=\"quotelink\">&gt;&gt;53671611</a><br>Eu te amo.",
            "time": 1458878020,
            "resto": 53670547
          },
          {
            "no": 53671665,
            "now": "03/24/16(Thu)23:55:07",
            "name": "Anonymous",
            "com": "<a href=\"#p53670547\" class=\"quotelink\">&gt;&gt;53670547</a><br>Fuck off back to your cancerous containment board you stupid fucking faggot. Nobody fucking cares.",
            "time": 1458878107,
            "resto": 53670547
          },
          {
            "no": 53671692,
            "now": "03/24/16(Thu)23:57:08",
            "name": "Anonymous",
            "com": "<a href=\"#p53671665\" class=\"quotelink\">&gt;&gt;53671665</a><br>This",
            "time": 1458878228,
            "resto": 53670547
          },
          {
            "no": 53671743,
            "now": "03/25/16(Fri)00:00:50",
            "name": "Anonymous",
            "com": "<a href=\"#p53671665\" class=\"quotelink\">&gt;&gt;53671665</a><br><a href=\"#p53671692\" class=\"quotelink\">&gt;&gt;53671692</a><br>im too comfy here at the current moment.",
            "filename": "1452559434661",
            "ext": ".jpg",
            "w": 300,
            "h": 300,
            "tn_w": 125,
            "tn_h": 125,
            "tim": 1458878450278,
            "time": 1458878450,
            "md5": "yJ1Y6J1RRGnUVyfENGqHjQ==",
            "fsize": 31435,
            "resto": 53670547
          }
        ]
      }
    ]
  }
];

const PULLDOWN_DISTANCE = 40 // pixels

class Chanixz extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   dataSource: new ListView.DataSource({
    //     rowHasChanged: (row1, row2) => row1 !== row2,
    //   }),
    //   loaded: false,
    // };
    // this.renderThreads = this.renderThreads.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }
  // componentDidMount() {
  //   this.fetchData();
  // }
  // fetchData() {
  //   fetch(REQUEST_URL)
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       this.setState({
  //         dataSource: this.state.dataSource.cloneWithRows(responseData[0].threads),
  //         loaded: true,
  //       });
  //     })
  //     .done();
  // }
  // handleScroll(e) {
  //   if (e.nativeEvent.contentOffset.y < -PULLDOWN_DISTANCE) {
  //     console.log("TRIED TO SCROLL");
  //   }
  //   //this.props.onScroll && this.props.onScroll(e)
  // }
  // render() {
  //   if (!this.state.loaded) {
  //     return this.renderLoadingView();
  //   }

  //   return (
  //     <ListView
  //       dataSource={this.state.dataSource}
  //       renderRow={this.renderThreads}
  //       onScroll={this.handleScroll}
  //       style={styles.listView}
  //     />
  //   );
  // }

  // renderLoadingView() {
  //   return (
  //     <View style={styles.container}>
  //       <Text>
  //         Loading 4chan...
  //       </Text>
  //     </View>
  //   );
  // }

  // handleClick(threadNumber) {
  //   let uri = `http://a.4cdn.org/g/thread/${threadNumber}.json`;
  //   console.log(uri);
  //   fetch(uri)
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       console.log(responseData);
  //     })
  //     .done();
  // }

  // renderThreads(thread) {
  //   let uri = `http://i.4cdn.org/g/${thread.tim}${thread.ext}`;
  //   let title = `<p>${thread.com}</p>`;
  //   return (
  //     <TouchableHighlight onPress={this.handleClick.bind(this, thread.no)}>
  //       <View style={styles.container}>
  //         <Image
  //           source={{uri: uri}}
  //           style={styles.thumbnail}
  //         />
  //         <View style={styles.rightContainer}>
  //           <HTMLView
  //             value={title}
  //             onLinkPress={(url) => console.log('navigating to: ', url)}
  //             stylesheet={threadSummaryStyle}
  //             style={styles.summary}
  //           />
  //         </View>
  //       </View>
  //     </TouchableHighlight>
  //   );
  // }
  render() {
    return (
        <NavigatorIOS
          initialRoute={{
            component: MyView,
            title: 'My View Title',
            passProps: { myProp: 'foo' },
          }}
        />
    );
  }
}

// var threadSummaryStyle = StyleSheet.create({
//   p: {
//     fontSize: 9
//   },
//   div: {
//     fontSize: 10
//   },
//   a: {
//     fontSize: 10
//   }
// });

// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//     borderTopColor: '#777',
//     borderStyle: 'solid',
//     borderTopWidth: 1,
//   },
//   summary: {
//     fontSize: 5
//   },
//   listView: {
//     paddingTop: 20,
//     backgroundColor: '#F5FCFF',
//   },
//   rightContainer: {
//     flex: 1,
//     height: 60,
//     paddingLeft: 20
//   },
//   title: {
//     fontSize: 20,
//     marginBottom: 8,
//     textAlign: 'center',
//   },
//   year: {
//     textAlign: 'center',
//   },
//   thumbnail: {
//     width: 100,
//     height: 100,
//   },
// });

AppRegistry.registerComponent('Chanixz', () => Chanixz);
