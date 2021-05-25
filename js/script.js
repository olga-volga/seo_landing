"use strict";

document.addEventListener('DOMContentLoaded', () => {

	// Header Mobile Menu

	const body = document.querySelector('body'),
		  menu = body.querySelector('.header__menu'),
		  burgerBtn = body.querySelector('.header__burger');
	
	function openMenu() {
		burgerBtn.classList.toggle('active');
		menu.classList.toggle('active');
		body.classList.toggle('lock');
	}

	function closeMenu() {
		burgerBtn.classList.remove('active');
		menu.classList.remove('active');
		body.classList.remove('lock');
	}

	burgerBtn.addEventListener('click', openMenu);

	menu.addEventListener('click', closeMenu);

	// Modal

	const btn = document.querySelectorAll('[data-modal]'),
		  modal = document.querySelector('.modal'),
		  close = document.querySelector('[data-close]');

	function openModal() {
		modal.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		modal.style.display = 'none';
		document.body.style.overflow = '';
	}

	btn.forEach((item, index) => {
		item.addEventListener('click', (e) => {
			e.preventDefault();
			openModal();

			if (e.target.classList.contains('header__login')) {
				hideForm();
				showForm();
			} else {
				hideForm();
				showForm(1);
			}
			
		});
	});

	close.addEventListener('click', closeModal);

	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			closeModal();
		}
	});

	// Modal Form Tabs

	const tabParentHeaders = document.querySelector('.modal__headers'),
		  tabHeaders = tabParentHeaders.querySelectorAll('.modal__title'),
		  forms = document.querySelectorAll('.form-content');

	function hideForm() {
		forms.forEach(item => {
			item.style.display = 'none';
		});
		tabHeaders.forEach(item => {
			item.classList.remove('modal__title--active');
		});
	}

	function showForm(i=0) {
		forms[i].style.display = 'block';
		tabHeaders[i].classList.add('modal__title--active');
	}


	tabParentHeaders.addEventListener('click', (e) => {
		if (e.target && e.target.classList.contains('modal__title')) {
			tabHeaders.forEach((item, index) => {
				if (e.target == item && e.target.innerHTML === item.innerHTML) {
					hideForm();
					showForm(index);
				}
			});
		}
	});

});