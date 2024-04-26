import { zodResolver } from "@hookform/resolvers/zod";
import { InstagramLogo, TwitterLogo, WhatsappLogo } from "phosphor-react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from 'zod';
import { Header } from '../../components/Header';

const contactFormSchema = z.object({
	name: z.string(),
	phone: z.string(),
    office: z.string(),
    company: z.string(),
    demand: z.string(),
})

type ContactFormInputs = z.infer<typeof contactFormSchema>;

export function Contact() {
	const {register, handleSubmit} = useForm<ContactFormInputs>({
		resolver: zodResolver(contactFormSchema)
	})

	const onSubmit: SubmitHandler<ContactFormInputs> = (data) => console.log(data)

	return (
        <>
            <Header />
			<main>
				<section id='description'>
					<h1>Contate-nos</h1>
					<p>
						Tem alguma grande ideia ou marca para desenvolver e precisa de ajuda?
						Então entre em contato, adoraríamos saber mais sobre seu projeto e fornecer ajuda
					</p>

					<h2>E-mail</h2>
					<p>consultoriasys@contato.com.br</p>

					<h2>Mídias sociais</h2>
					<a href="https://www.instagram.com">
						<InstagramLogo size={32} color="#3ed5dd"/>
					</a>

					<a href="https://www.x.com">
						<TwitterLogo size={32} color="#3ed5dd"/>
					</a>

					<a href="https://www.x.com">
						<WhatsappLogo size={32} color="#3ed5dd"/>
					</a>
				</section>

				<form id='contact' onSubmit={handleSubmit(onSubmit)}>

					<label htmlFor="name">Nome:</label>
					<input
						type="text"
						{...register("name", { required: "Nome pode estar vazio"})}
						id="name"
						name="name"
						placeholder="Digite o seu nome"
					/>

					<label htmlFor="phone">Celular/WhatsApp:</label>
					<input
						type="tel"
						{...register("phone", { required: "Celular não pode estar vazio!"})}
						id="phone"
						name="phone"
						placeholder="Digite o seu telefone"
					/>

					<label htmlFor="office">Cargo:</label>
					<input
						type="text"
						{...register("office", { required: "Cargo não pode estar vazio!"})}
						id="office"
						name="office"
						placeholder="Descreva o seu cargo"
					/>

					<label htmlFor="company">Empresa:</label>
					<input
						type="text"
						{...register("company", { required: "Campo empresa não pode estar vazio!"})}
						id="company"
						name="company"
						placeholder="Nome da empresa contratante"
					/>

					<label htmlFor="demand">Resumo da demanda:</label>
					<textarea
						{...register("demand", { required: "Não pode estar vazio!"})}
						id="demand"
						name="demand"
						placeholder="Descreva o serviço desejado!"
					/>
					<button type="submit">Enviar</button>
				</form>
			</main>
        </>
    )
}
