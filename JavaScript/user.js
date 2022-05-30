// In one file there will be only one default function

export default function User() {
    return "Hello User";
}

export function OtherUser(a = "other") {
    return a;
}

export function NewUser(a = "other") {
    return a;
}

export function OldUser(a = "other") {
    return a;
}