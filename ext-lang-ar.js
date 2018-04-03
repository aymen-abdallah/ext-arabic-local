/**
 * Arabic Translation for Ext JS 4
 * (03 mai 2012)
 * By Aymen Abdallah
 * aymen.abdallah@gmail.com
 */

Ext.onReady(function() {
    if (Ext.Updater) {
        Ext.Updater.defaults.indicatorText = '<div class="loading-indicator">...جاري التحميل</div>';
    }
    
	if(Ext.data.Types){
	    Ext.data.Types.stripRe = /[\$,%]/g;
	}
	
	if(Ext.view.View){
		Ext.view.View.prototype.emptyText = "";
	}
	
	if(Ext.grid.Panel){
		Ext.grid.Panel.prototype.ddText = "{0} {1} أعمدة مختارة";
	}
	
	if(Ext.LoadMask){
	  Ext.LoadMask.prototype.msg = "...جاري التحميل";
	}
	
	if(Ext.Date) {
        Ext.Date.shortMonthNames = [
  		  "جانفي",
		  "فيفري",
		  "مارس",
		  "أفريل",
		  "ماي",
		  "جوان",
		  "جويلية",
		  "أوت",
		  "سبتمبر",
		  "أكتوبر",
		  "نوفيمبر",
		  "ديسمبر"
        ];

        Ext.Date.getShortMonthName = function(month) {
            return Ext.Date.shortMonthNames[month];
        };
                                    
		Ext.Date.monthNames = [
		  "جانفي",
		  "فيفري",
		  "مارس",
		  "أفريل",
		  "ماي",
		  "جوان",
		  "جويلية",
		  "أوت",
		  "سبتمبر",
		  "أكتوبر",
		  "نوفيمبر",
		  "ديسمبر"
		];
		
		Ext.Date.monthNumbers = {
		  "جانفي": 0,
		  "فيفري": 1,
		  "مارس": 2,
		  "أفريل": 3,
		  "ماي": 4,
		  "جوان": 5,
		  "جويلية": 6,
		  "أوت": 7,
		  "سبتمبر": 8,
		  "أكتوبر": 9,
		  "نوفيمبر": 10,
		  "ديسمبر": 11
		};
		
		Ext.Date.getMonthNumber = function(name) {
			return Ext.Date.monthNumbers[Ext.util.Format.capitalize(name)];
		};
		
		Ext.Date.dayNames = [
		  "أحد",
		  "أثنين",
		  "ثلاثاء",
		  "أربعاء",
		  "خميس",
		  "جمعة",
		  "سبت"
		];
		
		Ext.Date.getShortDayName = function(day) {
		  return Ext.Date.dayNames[day].substring(0, 3);
		};
		
		Ext.Date.parseCodes.S.s = "(?:st|nd|rd|th)";
	
	}
	
	if(Ext.MessageBox){
	  Ext.MessageBox.buttonText = {
	    ok     : "موافق",
	    cancel : "الغاء",
	    yes    : "نعم",
	    no     : "لا"
	  };
	}
	
    if(Ext.util.Format){
        Ext.apply(Ext.util.Format, {
            thousandSeparator: ',',
            decimalSeparator: '.',
            currencySign: '$',
            dateFormat: 'd/m/Y'
        });
    }
	
	if(Ext.picker.Date){
	  Ext.apply(Ext.picker.Date.prototype, {
	    todayText         : "اليوم",
	    minText           : "هذا التاريخ قبل أقل تاريخ مسموح به",
	    maxText           : "هذا التاريخ بعد أكبر تاريخ مسموح به",
	    disabledDaysText  : "",
	    disabledDatesText : "",
        monthNames        : Ext.Date.monthNames,
        dayNames          : Ext.Date.dayNames,
	    nextText          : 'الشهر القادك (Control+Right)',
	    prevText          : 'الشهر السابق (Control+Left)',
	    monthYearText     : 'أختر الشهر (Control+Up/Down to move years)',
	    todayTip          : "{0} (Spacebar)",
	    format            : "d/m/y",
	    startDay          : 0
	  });
	}
	
    if(Ext.picker.Month) {
        Ext.apply(Ext.picker.Month.prototype, {
    	    okText            : "&#160;OK&#160;",
    	    cancelText        : "ألغاء",
        });
      }
	
	if(Ext.toolbar.Paging){
	  Ext.apply(Ext.PagingToolbar.prototype, {
	    beforePageText : "صفحة",
	    afterPageText  : "{0} من",
	    firstText      : "الأولى",
	    prevText       : "الصفحة السابقة",
	    nextText       : "الصفحة التالية",
	    lastText       : "الأخيرة",
	    refreshText    : "تحديث",
	    displayMsg     : "{2} يعرض {0} - {1} من",
	    emptyMsg       : 'لا يوجد تاريخ لعرضه'
	  });
	}
	
	if(Ext.form.Basic){
		Ext.form.Basic.prototype.waitTitle = "...يرجى الأنتظار";
	}
	
	if(Ext.form.field.Base){
		Ext.form.field.Base.prototype.invalidText = "القيمة بهذا الحقل غير صحيحة";
	}
	
	if(Ext.form.field.Text){
	  Ext.apply(Ext.form.field.Text.prototype, {
	    minLengthText : "{0} الحد الأقصى لهذا الحقل هو",
	    maxLengthText : "{0} الحد الأدنى لهذا الحقل هو",
	    blankText     : "هذا الحقل مطلوب",
	    regexText     : "",
	    emptyText     : null
	  });
	}
	
	if(Ext.form.field.Number){
	  Ext.apply(Ext.form.field.Number.prototype, {
	    decimalSeparator : ".",
	    decimalPrecision : 2,
	    minText : "{0} أعلى قيمة بهذا الحصل هي",
	    maxText : "{0} أقل قيمة بهذا الحقل هي",
	    nanText : "{0} هذا الرقم غير صحيح"
	  });
	}
	
	if(Ext.form.field.Date){
	  Ext.apply(Ext.form.field.Date.prototype, {
	    disabledDaysText  : "معطل",
	    disabledDatesText : "معطل",
	    minText           : "{0} التاريخ بهذا الحقل يجب ان يكون بعد",
	    maxText           : "{0} التاريخ بهذا الحقل يجب ان يكون قبل",
	    invalidText       : "{0} {1} هذا التاريح غير صحيح - يجب أن يكون بهذه الصيغة",
	    format            : "d/m/y",
	    altFormats        : "d/m/Y|d-m-y|d-m-Y|d/m|d-m|dm|dmy|dmY|d|Y-m-d"
	  });
	}
	
    if(Ext.form.field.ComboBox){
        Ext.apply(Ext.form.field.ComboBox.prototype, {
          valueNotFoundText : undefined
        });
          Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
              loadingText       : "...جاري التحميل"
          });
      }
	
	if(Ext.form.field.VTypes){
	  Ext.apply(Ext.form.field.VTypes, {
	    emailText    : '"user@example.com" هذا الحقل يجب ان تكون بريد ألكتروني بهذه الصيغة',
	    urlText      : '"http:/'+'/www.example.com" هذا الحقل يجب ان يحتوي على رابط موقع وبهذه الصيغة',
	    alphaText    : '_ هذا الحقل يجب ان يحتوي على احرف ورمز الشرطة التحتية',
	    alphanumText : '_ هذا الحقل يجب ان يحتوي على احرف وأرقام ورمز الشرطة التحتية'
	  });
	}
	
	if(Ext.form.field.HtmlEditor){
	  Ext.apply(Ext.form.field.HtmlEditor.prototype, {
	    createLinkText : ':يرجى ادخال الرابط',
	    buttonTips : {
	      bold : {
	        title: 'سميك (Ctrl+B)',
	        text: '.أجعل النص المحدد سميك',
	        cls: 'x-html-editor-tip'
	      },
	      italic : {
	        title: 'مائل (Ctrl+I)',
	        text: '.أجعل النص المحدد مائل',
	        cls: 'x-html-editor-tip'
	      },
	      underline : {
	        title: 'خط تحتي (Ctrl+U)',
	        text: '.ضع خط تحت النص المحدد',
	        cls: 'x-html-editor-tip'
	      },
	      increasefontsize : {
	        title: 'تكبير',
	        text: 'زيادة حجم الخط.',
	        cls: 'x-html-editor-tip'
	      },
	      decreasefontsize : {
	        title: 'تصغير',
	        text: '.تقليل حجم الخط',
	        cls: 'x-html-editor-tip'
	      },
	      backcolor : {
	        title: 'لون خلفية',
	        text: '.تغيير لون خلفية النص المحدد',
	        cls: 'x-html-editor-tip'
	      },
	      forecolor : {
	        title: 'لون الخط',
	        text: '.تغيير لون النص المحدد',
	        cls: 'x-html-editor-tip'
	      },
	      justifyleft : {
	        title: 'محازاة لليسار',
	        text: '.محازاة النص لليسار',
	        cls: 'x-html-editor-tip'
	      },
	      justifycenter : {
	        title: 'توصيط النص',
	        text: 'توسط النص المحدد.',
	        cls: 'x-html-editor-tip'
	      },
	      justifyright : {
	        title: 'محازاة لليمين',
	        text: '.محازاة النص المحدد لليمين',
	        cls: 'x-html-editor-tip'
	      },
	      insertunorderedlist : {
	        title: 'قائمة كرات',
	        text: '.أبدأ قائمة كرات',
	        cls: 'x-html-editor-tip'
	      },
	      insertorderedlist : {
	        title: 'قائمة أرقام',
	        text: '.أبدا قائمة أرقام',
	        cls: 'x-html-editor-tip'
	      },
	      createlink : {
	        title: 'رابط تشعبي',
	        text: '.أجعل النص المحدد رابط تشعبي',
	        cls: 'x-html-editor-tip'
	      },
	      sourceedit : {
	        title: 'تحرير المصدر',
	        text: '.أنتقل لتحرير كود المصدر',
	        cls: 'x-html-editor-tip'
	      }
	    }
	  });
	}
	
	if(Ext.grid.header.Container){
	  Ext.apply(Ext.grid.header.Container.prototype, {
	    sortAscText  : "فرز تصاعدي",
	    sortDescText : "فرز تنازلي",
	    columnsText  : "أعمدة"
	  });
	}
	
	if(Ext.grid.GroupingFeature){
	  Ext.apply(Ext.grid.GroupingFeature.prototype, {
	    emptyGroupText : '(لا شيء)',
	    groupByText    : 'تحميع بدلالة هذا العمود',
	    showGroupsText : 'أعرض كمجموعات'
	  });
	}
	
    if(Ext.grid.PropertyColumnModel){
        Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
            nameText   : "صفة",
            valueText  : "قيمة",
            dateFormat : "d/m/Y",
            trueText   : "صحيح",
            falseText  : "غير صحيح"
        });
    }
    
	if(Ext.layout.BorderLayout && Ext.layout.BorderLayout.SplitRegion){
	  Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype, {
	    splitTip            : ".اسحب لتغيير حجم",
	    collapsibleSplitTip : ".انقر مرتين للإخفاء.اسحب لتغيير حجم"
	  });
	}
	
	if(Ext.form.field.Time){
	  Ext.apply(Ext.form.field.Time.prototype, {
	    minText : "{0} الوقت بهذا الحقل يجب ان يكون أكبر من أو يساوي",
	    maxText : "{0} الوقت بهذا الحقل يجب ان يكون أقل من أو يساوي",
	    invalidText : "{0} ليست تنسيق صحيح للوقت",
	    format : "g:i A",
	    altFormats : "g:ia|g:iA|g:i a|g:i A|h:i|g:i|H:i|ga|ha|gA|h a|g a|g A|gi|hi|gia|hia|g|H"
	  });
	}
	
	if(Ext.form.CheckboxGroup){
	  Ext.apply(Ext.form.CheckboxGroup.prototype, {
	    blankText : "يجب تحديد عنصر واحد على الأقل في هذه المجموعة"
	  });
	}
	
	if(Ext.form.RadioGroup){
	  Ext.apply(Ext.form.RadioGroup.prototype, {
	    blankText : "يجب تحديد عنصر واحد في هذه المجموعة"
	  });
	}
});