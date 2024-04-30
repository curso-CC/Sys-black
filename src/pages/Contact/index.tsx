import { zodResolver } from "@hookform/resolvers/zod";
import { InstagramLogo, TwitterLogo, WhatsappLogo } from "phosphor-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import * as z from 'zod';
import { Header } from '../../components/Header';

import { Button } from "../../components/Button";
import { FormContainer, Main } from "./styles";

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

	function formValidation(data: ContactFormInputs){
		let formErros: boolean = false

		if(!data.name) {
			formErros = true
			toast.error('Nome não pode ser vazio!');
		}
		if(!data.phone) {
			formErros = true
            toast.error('Telefone não pode ser vazio!');
        }
		if(!data.office) {
			formErros = true
            toast.error('Escritório não pode ser vazio!');
        }
		if(!data.company) {
			formErros = true
            toast.error('Empresa não pode ser vazio!');
        }
		if(!data.demand) {
			formErros = true
            toast.error('Demanda não pode ser vazio!');
        }
		if(!formErros) {
			toast.success('Formulário enviado com sucesso!');
		}
	}

	const onSubmit: SubmitHandler<ContactFormInputs> = (data) => formValidation(data)

	return (
        <>
            <Header />
			<Main>
				<section className="description">
					<h1>Contate-nos</h1>
					<p>
						Tem alguma grande ideia ou marca para desenvolver e precisa de ajuda?
						Então entre em contato, adoraríamos saber mais sobre seu projeto e fornecer ajuda
					</p>

					<h2>E-mail</h2>
					<p>consultoriasys@contato.com.br</p>

					<h2>Mídias sociais</h2>
					<a href="https://www.instagram.com" target="_blank">
						<InstagramLogo size={32} color="#3ed5dd"/>
					</a>

					<a href="https://www.x.com" target="_blank">
						<TwitterLogo size={32} color="#3ed5dd"/>
					</a>

					<a href="https://web.whatsapp.com/" target="_blank">
						<WhatsappLogo size={32} color="#3ed5dd"/>
					</a>
				</section>

				<FormContainer id='contact' onSubmit={handleSubmit(onSubmit)}>

					<label htmlFor="name" id="input-name">Nome:</label>
					<input
						type="text"
						{...register("name", { required: true})}
						id="name"
						name="name"
						placeholder="Digite o seu nome"
					/>

					<label htmlFor="phone">Celular/WhatsApp:</label>
					<input
						type="tel"
						{...register("phone", { required: true})}
						id="phone"
						name="phone"
						placeholder="Digite o seu telefone"
					/>

					<label htmlFor="office">Cargo:</label>
					<input
						type="text"
						{...register("office", { required: true })}
						id="office"
						name="office"
						placeholder="Descreva o seu cargo"
					/>

					<label htmlFor="company">Empresa:</label>
					<input
						type="text"
						{...register("company", { required: true})}
						id="company"
						name="company"
						placeholder="Nome da empresa contratante"
					/>

					<label htmlFor="demand">Resumo da demanda:</label>
					<textarea
						{...register("demand", { required: true})}
						id="demand"
						name="demand"
						placeholder="Descreva o serviço desejado!"
					/>
					<Button url="/contact" titleButton="Enviar" typeButton="submit" />
				</FormContainer>
			</Main>
        </>
    )
}
