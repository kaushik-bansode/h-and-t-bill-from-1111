// Copyright (c) 2023, Abhishek and contributors
// For license information, please see license.txt


frappe.ui.form.on('H and T Billing', {
	refresh: function(frm) {
		const show_list_btn = frm.fields_dict['show_list'].$wrapper.find('button');
		const select_all_btn = frm.fields_dict['select_all'].$wrapper.find('button');
		const do_billing_btn = frm.fields_dict['do_billing'].$wrapper.find('button');
		show_list_btn.css({
			"color": "#007bff",
			"border":"1px solid #007bff",
			"letter-spacing":"1px",
			"width":"6rem",
			"padding":"0.5rem"
			

		});
		select_all_btn.css({
			"background-color": "#007bff",
			"color": "white",
			"letter-spacing":"1px",
			"width":"8rem",
			"margin-left":"1.5rem",
			"padding":"0.53rem"
		});
		
		do_billing_btn.css({
			"background-color": "#007bff",
			"color": "white",
			"padding":"0.53rem"
		})
	}
});

frappe.ui.form.on('H and T Billing', {
	show_list: function(frm) {
		const msg1 = frappe.msgprint("Loading...")
		frm.clear_table("h_and_t_table")
		frm.refresh_field('h_and_t_table')
		frm.clear_table("calculation_table")
		frm.refresh_field('calculation_table')
		frm.call({
			method:'get_data',//function name defined in python
			freeze:true,
			doc: frm.doc, //current document
			callback:(r)=>{
				frappe.hide_msgprint(msg1)
				frappe.msgprint("Data Loaded Successfully")
			}
		});

	}
});

// frappe.ui.form.on('H and T Billing', {
// 	set_item: function(frm) {
// 		frm.call({
// 			method:'selectall',//function name defined in python
// 			doc: frm.doc, //current document
// 		});

// 	}
// });

frappe.ui.form.on('H and T Billing', {
	select_all: function(frm) {
		const value = !frm.doc.h_and_t_table[0].check
		frm.doc.h_and_t_table.forEach(row=>row.check=value)
		frm.refresh_field("h_and_t_table")
		const button = frm.fields_dict['select_all'].$wrapper.find('button');
		const allSelected = value;
		const buttonText = allSelected ? 'DeSelect All' : 'Select All';
		button.text(buttonText);
		
		// 	method:'selectall',//function name defined in python
		// 	doc: frm.doc, //current document
		// });

	}
});
frappe.ui.form.on('H and T Billing', {
	do_billing: function(frm) {
		// const msg = frappe.msgprint("Loading...")
		// $("input, select, textarea, button").prop("disabled", true);
		// $('<div class="overlay"></div>').appendTo('body').show();
		
			
		frm.clear_table("child_h_and_t_invisible")
		frm.refresh_field('child_h_and_t_invisible')
		frm.clear_table("calculation_table")
		frm.refresh_field('calculation_table')
		frm.call({
			method:'get_all_data_calcalation',//function name defined in python
			freeze: true,	
			doc: frm.doc, //current document
			callback:(r)=>{
				if(!r.exc){
					// frappe.hide_msgprint(msg);
					frappe.show_alert({
						message:__('Data Loaded Successfully'),
						indicator:'green'
					}, 5);
					// $("input, select, textarea, button").prop("disabled", false);
					// $('.overlay').remove(); 
				}
			}
		});

	}
});

frappe.ui.form.on('H and T Billing', {
    refresh: function(frm) {
        $('.layout-side-section').hide();
        $('.layout-main-section-wrapper').css('margin-left', '0');
    }
});

// frappe.ui.form.on('H and T Billing', {
// 	data: function(frm) {
// 		frm.call({
// 			method:'delete_issue_date',//function name defined in python
// 			doc: frm.doc, //current document
// 		});

// 	}
// });

// // // // Copyright (c) 2023, Abhishek and contributors
// // // // For license information, please see license.txt

// // // // frappe.ui.form.on('H and T Billing', {
// // // // 	onload: function(frm) {
// // // // 		frappe.msgprint("hello")
// // // // 	}
// // // // });
// // // frappe.ui.form.on('H and T Billing', {
// // // 	show_list: function(frm) {
// // // 		frm.clear_table("h_and_t_table")
// // // 		frm.refresh_field('h_and_t_table')
// // // 		frm.clear_table("calculation_table")
// // // 		frm.refresh_field('calculation_table')
// // // 		frm.call({
// // // 			method:'get_data',//function name defined in python
// // // 			doc: frm.doc, //current document
// // // 		});

// // // 	}
// // // });
// // // frappe.ui.form.on('H and T Billing', {
// // // 	set_item: function(frm) {
// // // 		frm.call({
// // // 			method:'selectall',//function name defined in python
// // // 			doc: frm.doc, //current document
// // // 		});

// // // 	}
// // // });
// // // frappe.ui.form.on('H and T Billing', {
// // // 	do_billing: function(frm) {
// // // 		frm.clear_table("child_h_and_t_invisible")
// // // 		frm.refresh_field('child_h_and_t_invisible')
// // // 		frm.clear_table("calculation_table")
// // // 		frm.refresh_field('calculation_table')
// // // 		frm.call({
// // // 			method:'get_all_data_calcalation',//function name defined in python
// // // 			doc: frm.doc, //current document
// // // 		});

// // // 	}
// // // });

// // // frappe.ui.form.on('H and T Billing', {
// // //     refresh: function(frm) {
// // //         $('.layout-side-section').hide();
// // //         $('.layout-main-section-wrapper').css('margin-left', '0');
// // //     }
// // // });

// // // // frappe.ui.form.on('H and T Billing', {
// // // // 	data: function(frm) {
// // // // 		frm.call({
// // // // 			method:'delete_issue_date',//function name defined in python
// // // // 			doc: frm.doc, //current document
// // // // 		});

// // // // 	}
// // // // });

// // // Copyright (c) 2023, Abhishek and contributors
// // // For license information, please see license.txt


// // frappe.ui.form.on('H and T Billing', {
// // 	// refresh: function(frm) {

// // 	// }
// // });
// // frappe.ui.form.on('H and T Billing', {
// // 	show_list: function(frm) {
// // 		const msg1 = frappe.msgprint("Loading...")
// // 		frm.clear_table("h_and_t_table")
// // 		frm.refresh_field('h_and_t_table')
// // 		frm.clear_table("calculation_table")
// // 		frm.refresh_field('calculation_table')
// // 		frm.call({
// // 			method:'get_data',//function name defined in python
// // 			doc: frm.doc, //current document
// // 			callback:(r)=>{
// // 				frappe.hide_msgprint(msg1)
// // 				frappe.msgprint("Data Loaded Successfully")
// // 			}
// // 		});

// // 	}
// // });
// // frappe.ui.form.on('H and T Billing', {
// // 	set_item: function(frm) {
// // 		frm.call({
// // 			method:'selectall',//function name defined in python
// // 			doc: frm.doc, //current document
// // 		});

// // 	}
// // });
// // frappe.ui.form.on('H and T Billing', {
// // 	select_all: function(frm) {
// // 		frm.call({
// // 			method:'selectall',//function name defined in python
// // 			doc: frm.doc, //current document
// // 		});

// // 	}
// // });
// // frappe.ui.form.on('H and T Billing', {
// // 	do_billing: function(frm) {
// // 		const msg = frappe.msgprint("Loading...")
// // 		// $("input, select, textarea, button").prop("disabled", true);
// // 		// $('<div class="overlay"></div>').appendTo('body').show();
				
// // 		frm.clear_table("child_h_and_t_invisible")
// // 		frm.refresh_field('child_h_and_t_invisible')
// // 		frm.clear_table("calculation_table")
// // 		frm.refresh_field('calculation_table')
// // 		frm.call({
// // 			method:'get_all_data_calcalation',//function name defined in python
// // 			doc: frm.doc, //current document
// // 			callback:(r)=>{
// // 				if(!r.exc){
// // 					frappe.hide_msgprint(msg);
// // 					frappe.show_alert({
// // 						message:__('Data Loaded Successfully'),
// // 						indicator:'green'
// // 					}, 5);
// // 					// $("input, select, textarea, button").prop("disabled", false);
// // 					// $('.overlay').remove(); 
// // 				}
// // 			}
// // 		});

// // 	}
// // });

// // frappe.ui.form.on('H and T Billing', {
// //     refresh: function(frm) {
// //         $('.layout-side-section').hide();
// //         $('.layout-main-section-wrapper').css('margin-left', '0');
// //     }
// // });

// // // frappe.ui.form.on('H and T Billing', {
// // // 	data: function(frm) {
// // // 		frm.call({
// // // 			method:'delete_issue_date',//function name defined in python
// // // 			doc: frm.doc, //current document
// // // 		});

// // // 	}
// // // });

// // Copyright (c) 2023, Abhishek and contributors
// // For license information, please see license.txt


// frappe.ui.form.on('H and T Billing', {
// 	// refresh: function(frm) {

// 	// }
// });
// frappe.ui.form.on('H and T Billing', {
// 	show_list: function(frm) {
// 		const msg1 = frappe.msgprint("Loading...")
// 		frm.clear_table("h_and_t_table")
// 		frm.refresh_field('h_and_t_table')
// 		frm.clear_table("calculation_table")
// 		frm.refresh_field('calculation_table')
// 		frm.call({
// 			method:'get_data',//function name defined in python
// 			doc: frm.doc, //current document
// 			callback:(r)=>{
// 				frappe.hide_msgprint(msg1)
// 				frappe.msgprint("Data Loaded Successfully")
// 			}
// 		});

// 	}
// });
// frappe.ui.form.on('H and T Billing', {
// 	set_item: function(frm) {
// 		frm.call({
// 			method:'selectall',//function name defined in python
// 			doc: frm.doc, //current document
// 		});

// 	}
// });
// frappe.ui.form.on('H and T Billing', {
// 	select_all: function(frm) {
// 		frm.call({
// 			method:'selectall',//function name defined in python
// 			doc: frm.doc, //current document
// 		});

// 	}
// });
// frappe.ui.form.on('H and T Billing', {
// 	do_billing: function(frm) {
// 		const msg = frappe.msgprint("Loading...")
// 		// $("input, select, textarea, button").prop("disabled", true);
// 		// $('<div class="overlay"></div>').appendTo('body').show();
				
// 		frm.clear_table("child_h_and_t_invisible")
// 		frm.refresh_field('child_h_and_t_invisible')
// 		frm.clear_table("calculation_table")
// 		frm.refresh_field('calculation_table')
// 		frm.call({
// 			method:'get_all_data_calcalation',//function name defined in python
// 			doc: frm.doc, //current document
// 			callback:(r)=>{
// 				if(!r.exc){
// 					frappe.hide_msgprint(msg);
// 					frappe.show_alert({
// 						message:__('Data Loaded Successfully'),
// 						indicator:'green'
// 					}, 5);
// 					// $("input, select, textarea, button").prop("disabled", false);
// 					// $('.overlay').remove(); 
// 				}
// 			}
// 		});

// 	}
// });

// frappe.ui.form.on('H and T Billing', {
//     refresh: function(frm) {
//         $('.layout-side-section').hide();
//         $('.layout-main-section-wrapper').css('margin-left', '0');
//     }
// });

// // frappe.ui.form.on('H and T Billing', {
// // 	data: function(frm) {
// // 		frm.call({
// // 			method:'delete_issue_date',//function name defined in python
// // 			doc: frm.doc, //current document
// // 		});

// // 	}
// // });