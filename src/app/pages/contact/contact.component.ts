import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };
  isLoading = false;
  showAlert: boolean = false;  // لتفعيل التنبيه عند النجاح
  showError: boolean = false;  // لتفعيل التنبيه عند حدوث خطأ

  onSubmit(): void {
    // تحقق من صحة البيانات
    if (this.contact.name && this.contact.email && this.contact.message) {
      // هنا يتم تنفيذ إرسال البيانات أو العمل المطلوب
      this.showAlert = true;  // عرض تنبيه النجاح
      this.showError = false;  // التأكد من عدم ظهور تنبيه الخطأ

      // يمكنك إضافة تأخير لإخفاء التنبيه بعد فترة (اختياري)
      setTimeout(() => {
        this.showAlert = false;
      }, 3000);  // إخفاء التنبيه بعد 3 ثواني
    } else {
      this.showError = true;  // عرض تنبيه الخطأ
      this.showAlert = false;  // التأكد من عدم ظهور تنبيه النجاح

      // يمكنك إضافة تأخير لإخفاء التنبيه بعد فترة (اختياري)
      setTimeout(() => {
        this.isLoading = false
        this.showError = false;
      }, 3000);  // إخفاء التنبيه بعد 3 ثواني
    }
  }
}
