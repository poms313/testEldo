<?php

namespace App\Form;

use App\Entity\Artisan;
use App\Entity\Review;
use Symfony\Component\Form\AbstractType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

class AddReviewType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('author', TextType::class, array(
                'label' => 'Votre nom'
            ))
            ->add('grade', ChoiceType::class, array(
                'label' => 'Votre note',
                'choices'  => [
                    '1' => '1',
                    '2' => '2',
                    '3' => '3',
                    '4' => '4',
                    '5' => '5',
                    '6' => '6',
                    '7' => '7',
                    '8' => '8',
                    '9' => '9',
                    '10' => '10'
                ]
            ))
            ->add('comment', TextType::class, array(
                'label' => 'Commentaire',
                'required'   => false
            ))
            ->add('artisanId', EntityType::class, array(
                'label' => 'Nom de l\'artisan',
                'class' => Artisan::class,
                'choice_label' => function(Artisan $artisan) {
                    return sprintf('%s', $artisan->getName());
                }
            ))
            ->add('submit', SubmitType::class, [
                'label' => 'Envoyer',
                'attr' => ['class' => 'customButton']
            ]);
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Review::class,
        ]);
    }
}
