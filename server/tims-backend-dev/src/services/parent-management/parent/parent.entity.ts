import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
// import { StudentClass } from '../student/entities/student.entity';

@Entity()
export class Parent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50
  })
  fname: string;

  @Column({
    length: 50
  })
  lname: string;

  @Column({
    length: 50
  })
  studentid: string;

  @Column({
    length: 50
  })
  email: string;

  @Column({
    length: 50
  })
  phoneno: string;

  @Column({
    length: 50
  })
  nic: string;


  // @OneToMany(type => StudentClass, studentClass => StudentClass.student)
  // studentClasses: StudentClass[];

  constructor(fname: string, lname: string, studentid: string, email: string, phoneno: string, nic: string ) {
    this.id = 0;
    this.fname = fname;
    this.lname = lname;
    this.studentid = studentid;
    this.email = email;
    this.phoneno = phoneno;
    this.nic = nic;
    // this.studentClasses = null!;
  }
}
