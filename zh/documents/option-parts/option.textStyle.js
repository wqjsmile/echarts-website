window.__EC_DOC_option_textStyle = {
  "color": {
    "desc": "\n\n<p>文字的颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "width": {
    "desc": "\n\n<p>文本显示宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "100",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "height": {
    "desc": "\n\n<p>文本显示高度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "50",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "textBorderType": {
    "desc": "\n\n\n<p>文字本身的描边类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>自 <code class=\"codespan\">v5.0.0</code> 开始，也可以是 <code class=\"codespan\">number</code> 或者 <code class=\"codespan\">number</code> 数组，用以指定线条的 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a>，配合 \n<code class=\"codespan\">textBorderDashOffset</code>\n 可实现更灵活的虚线效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-js\">{\n\ntextBorderType: [5, 10],\n\ntextBorderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "textBorderDashOffset": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置虚线的偏移量，可搭配 \n<code class=\"codespan\">textBorderType</code>\n 指定 dash array 实现灵活的虚线效果。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "overflow": {
    "desc": "\n\n<p>文字超出宽度是否截断或者换行。配置<code class=\"codespan\">width</code>时有效</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 截断，并在末尾显示<code class=\"codespan\">ellipsis</code>配置的文本，默认为<code class=\"codespan\">...</code></li>\n<li><code class=\"codespan\">&#39;break&#39;</code> 换行</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> 换行，跟<code class=\"codespan\">&#39;break&#39;</code>不同的是，在英语等拉丁文中，<code class=\"codespan\">&#39;breakAll&#39;</code>还会强制单词内换行</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "truncate,break,breakAll"
    }
  },
  "ellipsis": {
    "desc": "<p>在<code class=\"codespan\">overflow</code>配置为<code class=\"codespan\">&#39;truncate&#39;</code>的时候，可以通过该属性配置末尾显示的文本。</p>\n"
  }
}