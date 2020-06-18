// $(function(){

//   $('#new_item').validate({
//     ignore: [],
//     groups: {
//       images: "item[images_attributes][0][image] item[images_attributes][1][image] item[images_attributes][2][image] item[images_attributes][3][image] item[images_attributes][4][image]"
//     },
//     rules: {
//       "item[images_attributes][0][image]": {
//         required: function(element){
//           if ($("#item_images_attributes_1_image").val()==="" && $("#item_images_attributes_2_image").val()==="" && $("#item_images_attributes_3_image").val()==="" && $("#item_images_attributes_4_image").val()===""){
//             return true;
//           }
//         }
//       }, 
//       "item[images_attributes][1][image]": {
//         required: function(element){
//           if ($("#item_images_attributes_0_image").val()==="" && $("#item_images_attributes_2_image").val()==="" && $("#item_images_attributes_3_image").val()==="" && $("#item_images_attributes_4_image").val()===""){
//             return true;
//           }
//         }
//       }, 
//       "item[images_attributes][2][image]": {
//         required: function(element){
//           if ($("#item_images_attributes_0_image").val()==="" && $("#item_images_attributes_1_image").val()==="" && $("#item_images_attributes_3_image").val()==="" && $("#item_images_attributes_4_image").val()===""){
//             return true;
//           }
//       }
//     }, 
//       "item[images_attributes][3][image]": {
//         required: function(element){
//           if ($("#item_images_attributes_0_image").val()==="" && $("#item_images_attributes_1_image").val()===""&& $("#item_images_attributes_2_image").val()==="" && $("#item_images_attributes_4_image").val()===""){
//             return true;
//           }
//       }
//       }, 
//       "item[images_attributes][4][image]": {
//         required: function(element){
//           if ($("#item_images_attributes_0_image").val()==="" && $("#item_images_attributes_1_image").val()===""&& $("#item_images_attributes_2_image").val()==="" && $("#item_images_attributes_3_image").val()===""){
//             return true;
//           }
//         }
//       }, 
//       "item[name]": {
//         required: true,
//         maxlength: 40
//       },
//       "item[description]": {
//         required: true,
//         maxlength: 1000
//       },
//       "item[parent_category_id]": {
//         required: true
//       },
//       "item[child_category_id]": { 
//         required: true
//       },
//       "item[category_id]": {
//         required: true
//       },
//       "item[condition]": {
//         required: true
//       },
//       "item[shipping_attributes][shipping_fee]": {
//         required: true
//       },
//       "item[shipping_attributes][shippingway_id]": {
//         required: true
//       },
//       "item[shipping_attributes][shippingarea_id]": {
//         required: true
//       },
//       "item[shipping_attributes][shipping_day]": {
//         required: true
//       },
//       "item[price]": {
//         required: true,
//         range: [300, 9999999]
  
//       }
//     },
//     messages: {
//       "item[images_attributes][0][image]": {
//         required: "画像がありません"
//       },
//       "item[images_attributes][1][image]": {
//         required: "画像がありません"
//       },
//       "item[images_attributes][2][image]": {
//         required: "画像がありません"
//       },
//       "item[images_attributes][3][image]": {
//         required: "画像がありません"
//       },
//       "item[images_attributes][4][image]": {
//         required: "画像がありません"
//       },
//       "item[name]": {
//         required: "商品名を入力してください"
//       },
//       "item[description]": {
//         required: "商品の説明を入力してください"
//       },
//       "item[parent_category_id]": {
//         required: "カテゴリーを選択してください"
//       },
//       "item[child_category_id]": {
//         required: "カテゴリーを選択してください"
//       },
//       "item[category_id]": {
//         required: "カテゴリーを選択してください"
//       },
//       "item[condition]": {
//         required: "商品の状態を選択してください"
//       },
//       "item[shipping_attributes][shipping_fee]": {
//         required: "配送料の負担を選択してください"
//       },
//       "item[shipping_attributes][shippingway_id]": {
//         required: "配送方法を選択してください"
//       },
//       "item[shipping_attributes][shippingarea_id]": {
//         required: "配送元の地域を選択してください"
//       },
//       "item[shipping_attributes][shipping_day]": {
//         required: "配送までの日数を選択してください"
//       },
//       "item[price]": {
//         required: "販売価格を入力してください",
//         range: "300以上9999999以下で入力してください"
//       }
//     },
//     errorClass: "form-invalid",
//     errorElement: "p", 
//     validClass: "valid",
//     errorPlacement: function(error, element){

//       // メッセージ表示場所の変更
//       // 【お名前】のようにフォームが2つセットのものは、デフォルトだとそれぞれのフォーム直下にメッセージが出てしまいレイアウトが崩れてしまうため、
//       // 表示場所をその親の直下に出てくるように変更
//       if(element.attr('name') === 'item[images_attributes][0][image]' || element.attr('name') === 'item[images_attributes][1][image]' || element.attr('name') === 'item[images_attributes][2][image]' || element.attr('name') === 'item[images_attributes][3][image]' || element.attr('name') === 'item[images_attributes][4][image]'){
//         error.insertAfter('#label-box--0'); 
//       }else{    //標準出力箇所（フォーム項目の後にエラーメッセージを出力）
//           error.insertAfter(element);
//       }
//     }
  
//   })
//   $('#new_item').on('blur', '#item_name, #item_description, #parent_category, #child_category, #grandchild_category, #item_condition, #item_shipping_attributes_shipping_fee, #item_shipping_attributes_shippingway_id, #item_shipping_attributes_shippingarea_id, #item_shipping_attributes_shipping_day, #item_price', function() {   
//     $(this).valid();

//   });
//   $(document).on('blur','#item_images_attributes_0_image, #item_images_attributes_1_image, #item_images_attributes_2_image, #item_images_attributes_3_image, #item_images_attributes_4_image', function() {   
//     $(this).valid();
//   });
// })