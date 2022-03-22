import bcrypt from "bcrypt"

const saltRounds = 12;
const plainTextpassword ="hunter12"

async function loginRouter(){
const isSame = await bcrypt.compare(plainTextpassword)

}

async function signUpRouter(){
const hashedPassword = await bcrypt.hash(plainTextpassword,saltRounds);
console.log(hashedPassword);

}


signUpRouter();