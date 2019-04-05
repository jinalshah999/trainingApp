import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { UserserviceService } from "../userservice.service";
import { HttpEventType } from "@angular/common/http";

@Component({
  selector: "app-adduser",
  templateUrl: "./adduser.component.html",
  styleUrls: ["./adduser.component.css"]
})
export class AdduserComponent implements OnInit {
  userForm: FormGroup;
  selectedFile: File = null;
  prg = 0;
  constructor(private _userdata: UserserviceService) {}

  ngOnInit() {
    this.userForm = new FormGroup({
      user_email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      user_name: new FormControl(null, [Validators.required]),
      password: new FormControl(null,[Validators.required]),
      user_photo: new FormControl(null),
      user_mobileno: new FormControl(null,[Validators.required,Validators.maxLength(10)]),
      user_hobby: new FormArray([])
    });
  }
  onSubmit() {
    console.log(this.userForm);
    const fd = new FormData();
    fd.append("user_email", this.userForm.get("user_email").value);
    fd.append("user_name", this.userForm.get("user_name").value);
    fd.append("password", this.userForm.get("password").value);
    fd.append("image", this.selectedFile, this.selectedFile.name);
    fd.append("user_mobileno", this.userForm.get("user_mobileno").value);
    var str = "";
    for (var i = 0; i < this.userForm.get("user_hobby").value.length; i++) {
      str += this.userForm.get("user_hobby").value[i] + ",";
    }
    fd.append("user_hobby", str);

    this._userdata.addUser(fd).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.prg = Math.round((event.loaded / event.total) * 100);
        console.log(
          "upload progess " +
            Math.round((event.loaded / event.total) * 100) +
            "%"
        );
      } else if (event.type === HttpEventType.Response) {
        console.log(event.body);
      }
    });
  }
  onAddHobby() {
    if(this.userForm.get("user_hobby").value.length!=3){
      const control = new FormControl(null, [Validators.required]);
   (<FormArray>this.userForm.get('user_hobby')).push(control);
    }

  }
  onRemoveHobby(i){
    (<FormArray>this.userForm.get("user_hobby")).removeAt(i);
  }
  onFileSelected(value) {
    this.selectedFile = <File>value.target.files[0];
    console.log(value);
  }
}
