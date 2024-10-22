import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="/perfil.jpg" alt="@shadcn" />
      <AvatarFallback>Jp</AvatarFallback>
    </Avatar>
  );
}
