import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import * as z from 'zod';
import { Header } from '../../components/Header';

import { PiInstagramLogoThin, PiTwitterLogoThin, PiWhatsappLogoThin } from "react-icons/pi";
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
				<section>
					<div className="description">
						<h1>Contate-nos</h1>
						<p>
							Você quer ter a certeza de que seus projetos e dados armazenados estão seguros? Nós entendemos a importância disso. Por isso, estamos aqui para ajudar.
						</p>
						<br />
						<p>
							Nossa equipe dedicada de especialistas em segurança cibernética está pronta para garantir que sua empresa esteja protegida contra ameaças digitais. Queremos saber mais sobre seu projeto para fornecer a ajuda de que você precisa.
						</p>
						<br />
						<p>
							Entre em contato conosco hoje mesmo e proteja o futuro do seu negócio. Sua segurança é a nossa prioridade.
						</p>
					</div>

					<h2>E-mail</h2>
					<p id="email">consultoriasys@contato.com.br</p>

					<h2>Mídias sociais</h2>

					<div id="social-media">
						<a href="https://www.instagram.com" target="_blank">
							<PiInstagramLogoThin size={40} />
						</a>

						<a href="https://www.x.com" target="_blank">
							<PiTwitterLogoThin size={40} />
						</a>

						<a href="https://web.whatsapp.com/" target="_blank">
							<PiWhatsappLogoThin size={40} />
						</a>
					</div>
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
